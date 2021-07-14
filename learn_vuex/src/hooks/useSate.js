import useMapper from './useMapper'
import { mapState } from "vuex";
export default function(query) {
    return useMapper(query, mapState)
}