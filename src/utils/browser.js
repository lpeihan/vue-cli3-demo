import UAParser from "ua-parser-js";

export const isAndroid = new UAParser().getBrowser().name === "Android Browser";
