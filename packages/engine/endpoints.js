import {isProd} from './env.js';

export const compilerBaseUrl = 
import.meta.env.VITE_COMPILER_URL ??
isProd ?
  `https://compiler.webaverse.com/`
:
  `https://local-compiler.webaverse.com:3000/`;

// scenes
export const scenesBaseUrl = isProd ?
  `https://webaverse.github.io/scenes/`
:
  `/scenes/`;
export const defaultSceneName = 'block.scn';

// characters
export const charactersBaseUrl = `/characters/`;
export const defaultCharacterName = 'scillia.npc';

// voice packs
export const voicePacksUrl = `https://webaverse.github.io/voicepacks/all_packs.json`;

// voice endpoints
export const voiceEndpointBaseUrl = `https://voice-cw.webaverse.com/tts`;
export const voiceEndpointsUrl = `https://raw.githubusercontent.com/webaverse/tiktalknet/main/model_lists/all_models.json`;

// image generation
export const imageAIEndpointUrl = `https://stable-diffusion.webaverse.com`;

// image captioning
export const imageCaptionAIEndpointUrl = `https://clip.webaverse.com`;

// sfx generation
export const audioAIEndpointUrl = `https://diffsound.webaverse.com`;