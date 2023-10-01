import { defaults } from 'jest-config';
import type {Config} from 'jest';

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    transform: {'^.+\\.tsx?$': 'ts-jest'}
};

export default config;