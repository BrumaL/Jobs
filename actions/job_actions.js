import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
    FETCH_JOBS
} from './types';

const JOB_ROOT_URl = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publish: '4201738803816157',
    form: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript',
};

const buildJobsUrl = (zip) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
    return `${JOB_ROOT_URl}${JOB_QUERY_PARAMS}`;
};

// Indeed API key = 4201738803816157
export const fetchJobs = (region) => async dispatch => {
    try {
        let zip = await reverseGeocode(region);
        const url = buildJobsUrl(zip);
        let { data } = await axios.get(url);
        dispatch({ type: FETCH_JOBS, payload: data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
};