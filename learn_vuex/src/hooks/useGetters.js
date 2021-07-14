import useMapper from './useMapper'
import { mapGetters } from "vuex";
export default function(query) {
    return useMapper(query, mapGetters)
}