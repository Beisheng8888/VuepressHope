import {
  flowRendererV2,
  flowStyles
} from "./chunk-FG2CXDDX.js";
import "./chunk-UAL6B3GX.js";
import {
  flowDb,
  parser$1
} from "./chunk-C3FHJ5DF.js";
import "./chunk-RWWEGXF3.js";
import "./chunk-4A5FVFZF.js";
import "./chunk-GDCX54F6.js";
import "./chunk-7GRMWMHH.js";
import "./chunk-B7KKYFBT.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-BS6NPFTN.js";
import {
  __toESM
} from "./chunk-TFWDKVI3.js";

// node_modules/mermaid/dist/flowDiagram-v2-fe64f300.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-fe64f300-5JNMQAM7.js.map
