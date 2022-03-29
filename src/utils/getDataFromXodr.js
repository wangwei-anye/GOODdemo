import { libjsesmini } from './libjsesmini';
import { ASSERT_SERVE } from '@/constants';
export default function (mapUrl) {
  return libjsesmini()().then((Module) => {
    return fetch(`${ASSERT_SERVE}/download/xodr/${mapUrl}`)
      .then((file_data) => {
        return file_data.text();
      })
      .then((file_text) => {
        Module['FS_createDataFile']('.', 'tempMapFile.xodr', file_text, true, true);
        var isLoad = Module.Position.LoadOpenDrivePath('./tempMapFile.xodr');
        var totalLines = {
          solidLines: [],
          brokenLines: [],
          referenceLines: []
        };

        var od = Module.Position.GetOpenDrive();
        for (var r = 0; r < od.GetNumOfRoads(); r++) {
          //new a road
          var road = od.GetRoadByIdx(r);
          for (var i = 0; i < road.GetNumberOfLaneSections(); i++) {
            var lane_section = road.GetLaneSectionByIdx(i);
            for (var j = 0; j < lane_section.GetNumberOfLanes(); j++) {
              var lane = lane_section.GetLaneByIdx(j);

              /***************/
              for (var k = 0; k < lane.GetNumberOfRoadMarks(); k++) {
                var lane_roadmark = lane.GetLaneRoadMarkByIdx(k);
                for (var m = 0; m < lane_roadmark.GetNumberOfRoadMarkTypes(); m++) {
                  var lane_roadmarktype = lane_roadmark.GetLaneRoadMarkTypeByIdx(m);
                  for (var n = 0; n < lane_roadmarktype.GetNumberOfRoadMarkTypeLines(); n++) {
                    var lane_roadmarktypeline = lane_roadmarktype.GetLaneRoadMarkTypeLineByIdx(n);
                    var curr_osi_rm = lane_roadmarktypeline.GetOSIPoints();
                    var roadmarkColor = lane_roadmark.GetColorInt(); //RoadMarkColor
                    if (roadmarkColor == Module.RoadMarkColor.YELLOW) {
                      //黄线
                    } else {
                    }
                    /*
                      enum RoadMarkColor{
                        STANDARD_COLOR, // equivalent to white
                        BLUE,GREEN,RED,WHITE,YELLOW
                      };
                      enum RoadMarkType{
                        NONE_TYPE = 1,SOLID = 2,BROKEN = 3,SOLID_SOLID = 4,SOLID_BROKEN = 5,BROKEN_SOLID = 6,
                        BROKEN_BROKEN = 7,BOTTS_DOTS = 8,GRASS = 9,CURB = 10
                      };
                      */
                    var roadmarkType = lane_roadmark.GetType();

                    if (roadmarkType == Module.RoadMarkType.BROKEN) {
                      //虚线
                      var brokenLineObj = {
                        name: 'brokenLine' + r + '-' + i + '-' + j + '-' + k + '-' + m + '-' + n,
                        path: []
                      };
                      var points = curr_osi_rm.GetPoints();
                      var pathResult = [];
                      for (var q = 0; q < points.size(); q++) {
                        var point = curr_osi_rm.GetPoint(q);
                        pathResult.push([point.x, point.y]);
                      }
                      brokenLineObj.path = pathResult;
                      totalLines.brokenLines.push(brokenLineObj);
                    } else if (roadmarkType == Module.RoadMarkType.SOLID) {
                      //实线
                      var solidLineObj = {
                        name: 'solidLine' + r + '-' + i + '-' + j + '-' + k + '-' + m + '-' + n,
                        path: []
                      };

                      var points = curr_osi_rm.GetPoints();
                      var pathResult = [];
                      for (var q = 0; q < points.size(); q++) {
                        var point = curr_osi_rm.GetPoint(q);
                        pathResult.push([point.x, point.y]);
                      }
                      solidLineObj.path = pathResult;
                      totalLines.solidLines.push(solidLineObj);
                    } else {
                      console.log('roadmarkType:-------->' + roadmarkType);
                    }
                  }
                }
              }
              /*************/
              if (lane.IsDriving() == false || lane.GetId() == 0) {
                continue;
              }

              /*****reference line*****************/

              var referenceLineObj = {
                name: 'referenceLine' + r + '-' + i + '-' + j,
                path: []
              };
              var curr_osi = lane.GetOSIPoints();
              var pathResult = [];
              var reflen = curr_osi.GetPoints().size();
              for (var q = 0; q < reflen; q++) {
                var point = curr_osi.GetPoint(q);
                pathResult.push([point.x, point.y]);
              }
              if (lane.GetId() > 0) {
                pathResult.reverse();
              }
              referenceLineObj.path = pathResult;
              totalLines.referenceLines.push(referenceLineObj);
              /******reference line****************/
            }
          }
        }
        return totalLines;
      })
      .catch((e) => {
        return e;
      });
  });
}
