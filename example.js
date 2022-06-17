export const source0 = `graph TD
0[a] --> |1| 1[a]
1[a] --> |0| 2[a]
2[a] --> |1| 3[a]
style 3 fill : red
2[a] --> |1| 4[b]
style 4 fill : green
0[a] --> |1| 5[b]
style 5 fill : red`
export const faDiagram = `<svg
            viewBox="0 0 259.51249980926514 118.33125019073486"
            style="max-width: 259.51249980926514px"
            height="118.33125019073486"
            aria-labelledby="chart-title-graphDiv chart-desc-graphDiv"
            role="img"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            id="graphDiv"
          >
            <title id="chart-title-graphDiv"></title>
            <desc id="chart-desc-graphDiv"></desc>
            <style>
              #graphDiv {
                font-family: "trebuchet ms", verdana, arial, sans-serif;
                font-size: 16px;
                fill: #333;
              }
              #graphDiv .error-icon {
                fill: #552222;
              }
              #graphDiv .error-text {
                fill: #552222;
                stroke: #552222;
              }
              #graphDiv .edge-thickness-normal {
                stroke-width: 2px;
              }
              #graphDiv .edge-thickness-thick {
                stroke-width: 3.5px;
              }
              #graphDiv .edge-pattern-solid {
                stroke-dasharray: 0;
              }
              #graphDiv .edge-pattern-dashed {
                stroke-dasharray: 3;
              }
              #graphDiv .edge-pattern-dotted {
                stroke-dasharray: 2;
              }
              #graphDiv .marker {
                fill: #333333;
                stroke: #333333;
              }
              #graphDiv .marker.cross {
                stroke: #333333;
              }
              #graphDiv svg {
                font-family: "trebuchet ms", verdana, arial, sans-serif;
                font-size: 16px;
              }
              #graphDiv .label {
                font-family: "trebuchet ms", verdana, arial, sans-serif;
                color: #333;
              }
              #graphDiv .cluster-label text {
                fill: #333;
              }
              #graphDiv .cluster-label span {
                color: #333;
              }
              #graphDiv .label text,
              #graphDiv span {
                fill: #333;
                color: #333;
              }
              #graphDiv .node rect,
              #graphDiv .node circle,
              #graphDiv .node ellipse,
              #graphDiv .node polygon,
              #graphDiv .node path {
                fill: #ececff;
                stroke: #9370db;
                stroke-width: 1px;
              }
              #graphDiv .node .label {
                text-align: center;
              }
              #graphDiv .node.clickable {
                cursor: pointer;
              }
              #graphDiv .arrowheadPath {
                fill: #333333;
              }
              #graphDiv .edgePath .path {
                stroke: #333333;
                stroke-width: 2px;
              }
              #graphDiv .flowchart-link {
                stroke: #333333;
                fill: none;
              }
              #graphDiv .edgeLabel {
                background-color: #e8e8e8;
                text-align: center;
              }
              #graphDiv .edgeLabel rect {
                opacity: 0.5;
                background-color: #e8e8e8;
                fill: #e8e8e8;
              }
              #graphDiv .cluster rect {
                fill: #ffffde;
                stroke: #aaaa33;
                stroke-width: 1px;
              }
              #graphDiv .cluster text {
                fill: #333;
              }
              #graphDiv .cluster span {
                color: #333;
              }
              #graphDiv div.mermaidTooltip {
                position: absolute;
                text-align: center;
                max-width: 200px;
                padding: 2px;
                font-family: "trebuchet ms", verdana, arial, sans-serif;
                font-size: 12px;
                background: hsl(80, 100%, 96.2745098039%);
                border: 1px solid #aaaa33;
                border-radius: 2px;
                pointer-events: none;
                z-index: 100;
              }
              #graphDiv :root {
                --mermaid-font-family: "trebuchet ms", verdana, arial,
                  sans-serif;
              }
            </style>
            <g transform="translate(0, 0)">
              <g class="output">
                <g class="clusters"></g>
                <g class="edgePaths">
                  <g style="opacity: 1" id="L-a-a" class="edgePath LS-a LE-a">
                    <path
                      style="fill: none"
                      marker-end="url(#arrowhead114)"
                      d="M133.7982196950363,50.337649224154404L131.52976641253025,55.836929909017556C129.2613131300242,61.33621059388071,124.7244065650121,72.33477196360703,122.45595328250606,79.13960820402572C120.1875,85.94444444444444,120.1875,88.55555555555554,123.85416666666667,91.16666666666667C127.52083333333333,93.77777777777777,134.85416666666666,96.38888888888887,142.1875,96.38888888888887C149.52083333333334,96.38888888888887,156.85416666666666,93.77777777777777,160.52083333333334,91.16666666666667C164.1875,88.55555555555554,164.1875,85.94444444444444,161.91904671749396,79.13960820402573C159.65059343498788,72.33477196360703,155.1136868699758,61.33621059388071,152.84523358746975,55.836929909017556L150.5767803049637,50.337649224154404"
                      class="path"
                    ></path>
                    <defs>
                      <marker
                        orient="auto"
                        markerHeight="6"
                        markerWidth="8"
                        markerUnits="strokeWidth"
                        refY="5"
                        refX="9"
                        viewBox="0 0 10 10"
                        id="arrowhead114"
                      >
                        <path
                          style="stroke-width: 1; stroke-dasharray: 1, 0"
                          class="arrowheadPath"
                          d="M 0 0 L 10 5 L 0 10 z"
                        ></path>
                      </marker>
                    </defs>
                  </g>
                  <g style="opacity: 1" id="L-a-b" class="edgePath LS-a LE-b">
                    <path
                      style="fill: none"
                      marker-end="url(#arrowhead115)"
                      d="M164.1875,30L169.05416671435037,30C173.92083342870077,30,183.65416685740152,30,193.3875002861023,30C203.12083371480307,30,212.85416714350382,30,217.72083385785422,30L222.5875005722046,30"
                      class="path"
                    ></path>
                    <defs>
                      <marker
                        orient="auto"
                        markerHeight="6"
                        markerWidth="8"
                        markerUnits="strokeWidth"
                        refY="5"
                        refX="9"
                        viewBox="0 0 10 10"
                        id="arrowhead115"
                      >
                        <path
                          style="stroke-width: 1; stroke-dasharray: 1, 0"
                          class="arrowheadPath"
                          d="M 0 0 L 10 5 L 0 10 z"
                        ></path>
                      </marker>
                    </defs>
                  </g>
                  <g
                    style="opacity: 1"
                    id="L-$start-a"
                    class="edgePath LS-$start LE-a"
                  >
                    <path
                      style="fill: none; stroke-width: 2px; stroke-dasharray: 3"
                      marker-end="url(#arrowhead116)"
                      d="M70.1875,30L74.35416666666667,30C78.52083333333333,30,86.85416666666667,30,95.1875,30C103.52083333333333,30,111.85416666666667,30,116.02083333333333,30L120.1875,30"
                      class="path"
                    ></path>
                    <defs>
                      <marker
                        orient="auto"
                        markerHeight="6"
                        markerWidth="8"
                        markerUnits="strokeWidth"
                        refY="5"
                        refX="9"
                        viewBox="0 0 10 10"
                        id="arrowhead116"
                      >
                        <path
                          style="stroke-width: 1; stroke-dasharray: 1, 0"
                          class="arrowheadPath"
                          d="M 0 0 L 10 5 L 0 10 z"
                        ></path>
                      </marker>
                    </defs>
                  </g>
                </g>
                <g class="edgeLabels">
                  <g
                    style="opacity: 1"
                    transform="translate(142.1875,99)"
                    class="edgeLabel"
                  >
                    <g
                      class="label"
                      transform="translate(-11.331250190734863,-12)"
                    >
                      <rect
                        height="24"
                        width="22.662500381469727"
                        ry="0"
                        rx="0"
                      ></rect>
                      <foreignObject height="24" width="22.662500381469727"
                        ><div
                          style="display: inline-block; white-space: nowrap"
                          xmlns="http://www.w3.org/1999/xhtml"
                        >
                          <span
                            style=""
                            class="edgeLabel L-LS-a' L-LE-a"
                            id="L-L-a-a"
                            >0,1</span
                          >
                        </div></foreignObject
                      >
                    </g>
                  </g>
                  <g
                    style="opacity: 1"
                    transform="translate(193.3875002861023,30)"
                    class="edgeLabel"
                  >
                    <g
                      class="label"
                      transform="translate(-4.200000286102295,-12)"
                    >
                      <rect
                        height="24"
                        width="8.40000057220459"
                        ry="0"
                        rx="0"
                      ></rect>
                      <foreignObject height="24" width="8.40000057220459"
                        ><div
                          style="display: inline-block; white-space: nowrap"
                          xmlns="http://www.w3.org/1999/xhtml"
                        >
                          <span
                            style=""
                            class="edgeLabel L-LS-a' L-LE-b"
                            id="L-L-a-b"
                            >1</span
                          >
                        </div></foreignObject
                      >
                    </g>
                  </g>
                  <g style="opacity: 1" transform="" class="edgeLabel">
                    <g class="label" transform="translate(0,0)">
                      <rect height="0" width="0" ry="0" rx="0"></rect>
                      <foreignObject height="0" width="0"
                        ><div
                          style="display: inline-block; white-space: nowrap"
                          xmlns="http://www.w3.org/1999/xhtml"
                        >
                          <span
                            style=""
                            class="edgeLabel L-LS-$start' L-LE-a"
                            id="L-L-$start-a"
                          ></span></div
                      ></foreignObject>
                    </g>
                  </g>
                </g>
                <g class="nodes">
                  <g
                    style="opacity: 1"
                    transform="translate(142.1875,30)"
                    id="flowchart-a-99"
                    class="node default"
                  >
                    <circle
                      class="label-container"
                      r="22"
                      y="-22"
                      x="-14.206250190734863"
                    ></circle>
                    <g transform="translate(0,0)" class="label">
                      <g transform="translate(-4.206250190734863,-12)">
                        <foreignObject height="24" width="8.412500381469727"
                          ><div
                            style="display: inline-block; white-space: nowrap"
                            xmlns="http://www.w3.org/1999/xhtml"
                          >
                            a
                          </div></foreignObject
                        >
                      </g>
                    </g>
                  </g>
                  <g
                    style="opacity: 1"
                    transform="translate(237.05000019073486,30)"
                    id="flowchart-b-102"
                    class="node default"
                  >
                    <rect
                      style="stroke-width: 4px"
                      class="label-container"
                      height="44"
                      width="28.925000190734863"
                      y="-22"
                      x="-14.462500095367432"
                      ry="0"
                      rx="0"
                    ></rect>
                    <g transform="translate(0,0)" class="label">
                      <g transform="translate(-4.462500095367432,-12)">
                        <foreignObject height="24" width="8.925000190734863"
                          ><div
                            style="display: inline-block; white-space: nowrap"
                            xmlns="http://www.w3.org/1999/xhtml"
                          >
                            b
                          </div></foreignObject
                        >
                      </g>
                    </g>
                  </g>
                  <g
                    style="opacity: 1"
                    transform="translate(39.09375,30)"
                    id="flowchart-$start-104"
                    class="node default"
                  >
                    <rect
                      class="label-container"
                      height="44"
                      width="62.1875"
                      y="-22"
                      x="-31.09375"
                      ry="0"
                      rx="0"
                    ></rect>
                    <g transform="translate(0,0)" class="label">
                      <g transform="translate(-21.09375,-12)">
                        <foreignObject height="24" width="42.1875"
                          ><div
                            style="display: inline-block; white-space: nowrap"
                            xmlns="http://www.w3.org/1999/xhtml"
                          >
                            $start
                          </div></foreignObject
                        >
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>`