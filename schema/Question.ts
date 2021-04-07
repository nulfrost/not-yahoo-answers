import {objectType, extendType} from "nexus"


export const Question = objectType({
    name: "Question",
    definition(t) {
        t.model.id()
    }
})