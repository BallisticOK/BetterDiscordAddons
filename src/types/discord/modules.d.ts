import {ForwardRefExoticComponent, MemoExoticComponent, JSX} from "react";

export type ClassModule = Record<string, string>;


export interface Dispatcher {
    register<T>(callback: (payload: T) => void): string;
    unregister(id: string): void;
    waitFor(IDs: string[]): void;
    dispatch<T>(payload: T): void;
    isDispatching(): boolean;
}

export type StoreChangeListener = () => void;

export interface FluxStore {
    addChangeListener(fn: StoreChangeListener): void;
    removeChangeListener(fn: StoreChangeListener): void;

    emitChange(): void;
    getDispatchToken(): string;
    getName(): string;
    initialize(): void;
    _dispatchToken: string;
    _isInitialized: boolean;
}

export type Memo = MemoExoticComponent<ForwardRefExoticComponent<null> & JSX.ElementClass>;


export interface DiscordPermissions {
    ADD_REACTIONS: 64n;
    ADMINISTRATOR: 8n;
    ATTACH_FILES: 32768n;
    BAN_MEMBERS: 4n;
    CHANGE_NICKNAME: 67108864n;
    CONNECT: 1048576n;
    CREATE_EVENTS: 17592186044416n;
    CREATE_GUILD_EXPRESSIONS: 8796093022208n;
    CREATE_INSTANT_INVITE: 1n;
    CREATE_PRIVATE_THREADS: 68719476736n;
    CREATE_PUBLIC_THREADS: 34359738368n;
    DEAFEN_MEMBERS: 8388608n;
    EMBED_LINKS: 16384n;
    KICK_MEMBERS: 2n;
    MANAGE_CHANNELS: 16n;
    MANAGE_EVENTS: 8589934592n;
    MANAGE_GUILD: 32n;
    MANAGE_GUILD_EXPRESSIONS: 1073741824n;
    MANAGE_MESSAGES: 8192n;
    MANAGE_NICKNAMES: 134217728n;
    MANAGE_ROLES: 268435456n;
    MANAGE_THREADS: 17179869184n;
    MANAGE_WEBHOOKS: 536870912n;
    MENTION_EVERYONE: 131072n;
    MODERATE_MEMBERS: 1099511627776n;
    MOVE_MEMBERS: 16777216n;
    MUTE_MEMBERS: 4194304n;
    PRIORITY_SPEAKER: 256n;
    READ_MESSAGE_HISTORY: 65536n;
    REQUEST_TO_SPEAK: 4294967296n;
    SEND_MESSAGES: 2048n;
    SEND_MESSAGES_IN_THREADS: 274877906944n;
    SEND_POLLS: 562949953421312n;
    SEND_TTS_MESSAGES: 4096n;
    SEND_VOICE_MESSAGES: 70368744177664n;
    SET_VOICE_CHANNEL_STATUS: 281474976710656n;
    SPEAK: 2097152n;
    STREAM: 512n;
    USE_APPLICATION_COMMANDS: 2147483648n;
    USE_CLYDE_AI: 140737488355328n;
    USE_EMBEDDED_ACTIVITIES: 549755813888n;
    USE_EXTERNAL_APPS: 1125899906842624n;
    USE_EXTERNAL_EMOJIS: 262144n;
    USE_EXTERNAL_SOUNDS: 35184372088832n;
    USE_EXTERNAL_STICKERS: 137438953472n;
    USE_SOUNDBOARD: 4398046511104n;
    USE_VAD: 33554432n;
    VIEW_AUDIT_LOG: 128n;
    VIEW_CHANNEL: 1024n;
    VIEW_CREATOR_MONETIZATION_ANALYTICS: 2199023255552n;
    VIEW_GUILD_ANALYTICS: 524288n;
}