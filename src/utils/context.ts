import {createContext} from "react";
import {InfoTwitterContext} from "./types";

export const TwitterContext = createContext<{
    user: InfoTwitterContext["user"];
    stats: InfoTwitterContext["stats"];
} | null>(null);