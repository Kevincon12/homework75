import axios from 'axios';
import type {DecodeResponse, EncodeResponse, MessagePayload} from "../types/types";

const API = axios.create({
    baseURL: 'http://localhost:8000',
});

export const encodeMessage = (payload: MessagePayload) => {
    return API.post<EncodeResponse>('/encode', payload);
};

export const decodeMessage = (payload: MessagePayload) => {
    return API.post<DecodeResponse>('/decode', payload);
};