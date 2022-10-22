// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
export const os = {
    UV_UDP_IPV6ONLY: 1,
    UV_UDP_PARTIAL: 2,
    UV_UDP_REUSEADDR: 4,
    UV_UDP_MMSG_CHUNK: 8,
    UV_UDP_MMSG_FREE: 16,
    UV_UDP_LINUX_RECVERR: 32,
    UV_UDP_RECVMMSG: 256,
    dlopen: {
        RTLD_LAZY: 1,
        RTLD_NOW: 2,
        RTLD_GLOBAL: 8,
        RTLD_LOCAL: 4
    },
    errno: {
        E2BIG: 7,
        EACCES: 13,
        EADDRINUSE: 48,
        EADDRNOTAVAIL: 49,
        EAFNOSUPPORT: 47,
        EAGAIN: 35,
        EALREADY: 37,
        EBADF: 9,
        EBADMSG: 94,
        EBUSY: 16,
        ECANCELED: 89,
        ECHILD: 10,
        ECONNABORTED: 53,
        ECONNREFUSED: 61,
        ECONNRESET: 54,
        EDEADLK: 11,
        EDESTADDRREQ: 39,
        EDOM: 33,
        EDQUOT: 69,
        EEXIST: 17,
        EFAULT: 14,
        EFBIG: 27,
        EHOSTUNREACH: 65,
        EIDRM: 90,
        EILSEQ: 92,
        EINPROGRESS: 36,
        EINTR: 4,
        EINVAL: 22,
        EIO: 5,
        EISCONN: 56,
        EISDIR: 21,
        ELOOP: 62,
        EMFILE: 24,
        EMLINK: 31,
        EMSGSIZE: 40,
        EMULTIHOP: 95,
        ENAMETOOLONG: 63,
        ENETDOWN: 50,
        ENETRESET: 52,
        ENETUNREACH: 51,
        ENFILE: 23,
        ENOBUFS: 55,
        ENODATA: 96,
        ENODEV: 19,
        ENOENT: 2,
        ENOEXEC: 8,
        ENOLCK: 77,
        ENOLINK: 97,
        ENOMEM: 12,
        ENOMSG: 91,
        ENOPROTOOPT: 42,
        ENOSPC: 28,
        ENOSR: 98,
        ENOSTR: 99,
        ENOSYS: 78,
        ENOTCONN: 57,
        ENOTDIR: 20,
        ENOTEMPTY: 66,
        ENOTSOCK: 38,
        ENOTSUP: 45,
        ENOTTY: 25,
        ENXIO: 6,
        EOPNOTSUPP: 102,
        EOVERFLOW: 84,
        EPERM: 1,
        EPIPE: 32,
        EPROTO: 100,
        EPROTONOSUPPORT: 43,
        EPROTOTYPE: 41,
        ERANGE: 34,
        EROFS: 30,
        ESPIPE: 29,
        ESRCH: 3,
        ESTALE: 70,
        ETIME: 101,
        ETIMEDOUT: 60,
        ETXTBSY: 26,
        EWOULDBLOCK: 35,
        EXDEV: 18
    },
    signals: {
        SIGHUP: 1,
        SIGINT: 2,
        SIGQUIT: 3,
        SIGILL: 4,
        SIGTRAP: 5,
        SIGABRT: 6,
        SIGIOT: 6,
        SIGBUS: 10,
        SIGFPE: 8,
        SIGKILL: 9,
        SIGUSR1: 30,
        SIGSEGV: 11,
        SIGUSR2: 31,
        SIGPIPE: 13,
        SIGALRM: 14,
        SIGTERM: 15,
        SIGCHLD: 20,
        SIGCONT: 19,
        SIGSTOP: 17,
        SIGTSTP: 18,
        SIGTTIN: 21,
        SIGBREAK: 21,
        SIGTTOU: 22,
        SIGURG: 16,
        SIGXCPU: 24,
        SIGXFSZ: 25,
        SIGVTALRM: 26,
        SIGPROF: 27,
        SIGWINCH: 28,
        SIGIO: 23,
        SIGINFO: 29,
        SIGSYS: 12,
        SIGEMT: 7,
        SIGPWR: 30,
        SIGSTKFLT: 16
    },
    priority: {
        PRIORITY_LOW: 19,
        PRIORITY_BELOW_NORMAL: 10,
        PRIORITY_NORMAL: 0,
        PRIORITY_ABOVE_NORMAL: -7,
        PRIORITY_HIGH: -14,
        PRIORITY_HIGHEST: -20
    }
};
export const fs = {
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    UV_DIRENT_UNKNOWN: 0,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_BLOCK: 7,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFBLK: 24576,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    S_IFSOCK: 49152,
    O_CREAT: 512,
    O_EXCL: 2048,
    UV_FS_O_FILEMAP: 0,
    O_NOCTTY: 131072,
    O_TRUNC: 1024,
    O_APPEND: 8,
    O_DIRECTORY: 1048576,
    O_NOFOLLOW: 256,
    O_SYNC: 128,
    O_DSYNC: 4194304,
    O_SYMLINK: 2097152,
    O_NONBLOCK: 4,
    S_IRWXU: 448,
    S_IRUSR: 256,
    S_IWUSR: 128,
    S_IXUSR: 64,
    S_IRWXG: 56,
    S_IRGRP: 32,
    S_IWGRP: 16,
    S_IXGRP: 8,
    S_IRWXO: 7,
    S_IROTH: 4,
    S_IWOTH: 2,
    S_IXOTH: 1,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_COPYFILE_EXCL: 1,
    COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_FICLONE_FORCE: 4
};
export const crypto = {
    OPENSSL_VERSION_NUMBER: 269488319,
    SSL_OP_ALL: 2147485780,
    SSL_OP_ALLOW_NO_DHE_KEX: 1024,
    SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
    SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
    SSL_OP_CISCO_ANYCONNECT: 32768,
    SSL_OP_COOKIE_EXCHANGE: 8192,
    SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
    SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
    SSL_OP_EPHEMERAL_RSA: 0,
    SSL_OP_LEGACY_SERVER_CONNECT: 4,
    SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
    SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
    SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
    SSL_OP_NETSCAPE_CA_DN_BUG: 0,
    SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
    SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NO_COMPRESSION: 131072,
    SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
    SSL_OP_NO_QUERY_MTU: 4096,
    SSL_OP_NO_RENEGOTIATION: 1073741824,
    SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
    SSL_OP_NO_SSLv2: 0,
    SSL_OP_NO_SSLv3: 33554432,
    SSL_OP_NO_TICKET: 16384,
    SSL_OP_NO_TLSv1: 67108864,
    SSL_OP_NO_TLSv1_1: 268435456,
    SSL_OP_NO_TLSv1_2: 134217728,
    SSL_OP_NO_TLSv1_3: 536870912,
    SSL_OP_PKCS1_CHECK_1: 0,
    SSL_OP_PKCS1_CHECK_2: 0,
    SSL_OP_PRIORITIZE_CHACHA: 2097152,
    SSL_OP_SINGLE_DH_USE: 0,
    SSL_OP_SINGLE_ECDH_USE: 0,
    SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
    SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
    SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
    SSL_OP_TLS_D5_BUG: 0,
    SSL_OP_TLS_ROLLBACK_BUG: 8388608,
    ENGINE_METHOD_RSA: 1,
    ENGINE_METHOD_DSA: 2,
    ENGINE_METHOD_DH: 4,
    ENGINE_METHOD_RAND: 8,
    ENGINE_METHOD_EC: 2048,
    ENGINE_METHOD_CIPHERS: 64,
    ENGINE_METHOD_DIGESTS: 128,
    ENGINE_METHOD_PKEY_METHS: 512,
    ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
    ENGINE_METHOD_ALL: 65535,
    ENGINE_METHOD_NONE: 0,
    DH_CHECK_P_NOT_SAFE_PRIME: 2,
    DH_CHECK_P_NOT_PRIME: 1,
    DH_UNABLE_TO_CHECK_GENERATOR: 4,
    DH_NOT_SUITABLE_GENERATOR: 8,
    ALPN_ENABLED: 1,
    RSA_PKCS1_PADDING: 1,
    RSA_SSLV23_PADDING: 2,
    RSA_NO_PADDING: 3,
    RSA_PKCS1_OAEP_PADDING: 4,
    RSA_X931_PADDING: 5,
    RSA_PKCS1_PSS_PADDING: 6,
    RSA_PSS_SALTLEN_DIGEST: -1,
    RSA_PSS_SALTLEN_MAX_SIGN: -2,
    RSA_PSS_SALTLEN_AUTO: -2,
    defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
    TLS1_VERSION: 769,
    TLS1_1_VERSION: 770,
    TLS1_2_VERSION: 771,
    TLS1_3_VERSION: 772,
    POINT_CONVERSION_COMPRESSED: 2,
    POINT_CONVERSION_UNCOMPRESSED: 4,
    POINT_CONVERSION_HYBRID: 6
};
export const zlib = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_VERSION_ERROR: -6,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    ZLIB_VERNUM: 4784,
    DEFLATE: 1,
    INFLATE: 2,
    GZIP: 3,
    GUNZIP: 4,
    DEFLATERAW: 5,
    INFLATERAW: 6,
    UNZIP: 7,
    BROTLI_DECODE: 8,
    BROTLI_ENCODE: 9,
    Z_MIN_WINDOWBITS: 8,
    Z_MAX_WINDOWBITS: 15,
    Z_DEFAULT_WINDOWBITS: 15,
    Z_MIN_CHUNK: 64,
    Z_MAX_CHUNK: Infinity,
    Z_DEFAULT_CHUNK: 16384,
    Z_MIN_MEMLEVEL: 1,
    Z_MAX_MEMLEVEL: 9,
    Z_DEFAULT_MEMLEVEL: 8,
    Z_MIN_LEVEL: -1,
    Z_MAX_LEVEL: 9,
    Z_DEFAULT_LEVEL: -1,
    BROTLI_OPERATION_PROCESS: 0,
    BROTLI_OPERATION_FLUSH: 1,
    BROTLI_OPERATION_FINISH: 2,
    BROTLI_OPERATION_EMIT_METADATA: 3,
    BROTLI_PARAM_MODE: 0,
    BROTLI_MODE_GENERIC: 0,
    BROTLI_MODE_TEXT: 1,
    BROTLI_MODE_FONT: 2,
    BROTLI_DEFAULT_MODE: 0,
    BROTLI_PARAM_QUALITY: 1,
    BROTLI_MIN_QUALITY: 0,
    BROTLI_MAX_QUALITY: 11,
    BROTLI_DEFAULT_QUALITY: 11,
    BROTLI_PARAM_LGWIN: 2,
    BROTLI_MIN_WINDOW_BITS: 10,
    BROTLI_MAX_WINDOW_BITS: 24,
    BROTLI_LARGE_MAX_WINDOW_BITS: 30,
    BROTLI_DEFAULT_WINDOW: 22,
    BROTLI_PARAM_LGBLOCK: 3,
    BROTLI_MIN_INPUT_BLOCK_BITS: 16,
    BROTLI_MAX_INPUT_BLOCK_BITS: 24,
    BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
    BROTLI_PARAM_SIZE_HINT: 5,
    BROTLI_PARAM_LARGE_WINDOW: 6,
    BROTLI_PARAM_NPOSTFIX: 7,
    BROTLI_PARAM_NDIRECT: 8,
    BROTLI_DECODER_RESULT_ERROR: 0,
    BROTLI_DECODER_RESULT_SUCCESS: 1,
    BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
    BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
    BROTLI_DECODER_NO_ERROR: 0,
    BROTLI_DECODER_SUCCESS: 1,
    BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
    BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
    BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
    BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
    BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
    BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
    BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
    BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
    BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
    BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
    BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
    BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
    BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
    BROTLI_DECODER_ERROR_UNREACHABLE: -31
};
export const trace = {
    TRACE_EVENT_PHASE_BEGIN: 66,
    TRACE_EVENT_PHASE_END: 69,
    TRACE_EVENT_PHASE_COMPLETE: 88,
    TRACE_EVENT_PHASE_INSTANT: 73,
    TRACE_EVENT_PHASE_ASYNC_BEGIN: 83,
    TRACE_EVENT_PHASE_ASYNC_STEP_INTO: 84,
    TRACE_EVENT_PHASE_ASYNC_STEP_PAST: 112,
    TRACE_EVENT_PHASE_ASYNC_END: 70,
    TRACE_EVENT_PHASE_NESTABLE_ASYNC_BEGIN: 98,
    TRACE_EVENT_PHASE_NESTABLE_ASYNC_END: 101,
    TRACE_EVENT_PHASE_NESTABLE_ASYNC_INSTANT: 110,
    TRACE_EVENT_PHASE_FLOW_BEGIN: 115,
    TRACE_EVENT_PHASE_FLOW_STEP: 116,
    TRACE_EVENT_PHASE_FLOW_END: 102,
    TRACE_EVENT_PHASE_METADATA: 77,
    TRACE_EVENT_PHASE_COUNTER: 67,
    TRACE_EVENT_PHASE_SAMPLE: 80,
    TRACE_EVENT_PHASE_CREATE_OBJECT: 78,
    TRACE_EVENT_PHASE_SNAPSHOT_OBJECT: 79,
    TRACE_EVENT_PHASE_DELETE_OBJECT: 68,
    TRACE_EVENT_PHASE_MEMORY_DUMP: 118,
    TRACE_EVENT_PHASE_MARK: 82,
    TRACE_EVENT_PHASE_CLOCK_SYNC: 99,
    TRACE_EVENT_PHASE_ENTER_CONTEXT: 40,
    TRACE_EVENT_PHASE_LEAVE_CONTEXT: 41,
    TRACE_EVENT_PHASE_LINK_IDS: 61
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjE0Ny4wL25vZGUvaW50ZXJuYWxfYmluZGluZy9jb25zdGFudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTgtMjAyMiB0aGUgRGVubyBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgbGljZW5zZS5cbmV4cG9ydCBjb25zdCBvcyA9IHtcbiAgVVZfVURQX0lQVjZPTkxZOiAxLFxuICBVVl9VRFBfUEFSVElBTDogMixcbiAgVVZfVURQX1JFVVNFQUREUjogNCxcbiAgVVZfVURQX01NU0dfQ0hVTks6IDgsXG4gIFVWX1VEUF9NTVNHX0ZSRUU6IDE2LFxuICBVVl9VRFBfTElOVVhfUkVDVkVSUjogMzIsXG4gIFVWX1VEUF9SRUNWTU1TRzogMjU2LFxuICBkbG9wZW46IHtcbiAgICBSVExEX0xBWlk6IDEsXG4gICAgUlRMRF9OT1c6IDIsXG4gICAgUlRMRF9HTE9CQUw6IDgsXG4gICAgUlRMRF9MT0NBTDogNCxcbiAgfSxcbiAgZXJybm86IHtcbiAgICBFMkJJRzogNyxcbiAgICBFQUNDRVM6IDEzLFxuICAgIEVBRERSSU5VU0U6IDQ4LFxuICAgIEVBRERSTk9UQVZBSUw6IDQ5LFxuICAgIEVBRk5PU1VQUE9SVDogNDcsXG4gICAgRUFHQUlOOiAzNSxcbiAgICBFQUxSRUFEWTogMzcsXG4gICAgRUJBREY6IDksXG4gICAgRUJBRE1TRzogOTQsXG4gICAgRUJVU1k6IDE2LFxuICAgIEVDQU5DRUxFRDogODksXG4gICAgRUNISUxEOiAxMCxcbiAgICBFQ09OTkFCT1JURUQ6IDUzLFxuICAgIEVDT05OUkVGVVNFRDogNjEsXG4gICAgRUNPTk5SRVNFVDogNTQsXG4gICAgRURFQURMSzogMTEsXG4gICAgRURFU1RBRERSUkVROiAzOSxcbiAgICBFRE9NOiAzMyxcbiAgICBFRFFVT1Q6IDY5LFxuICAgIEVFWElTVDogMTcsXG4gICAgRUZBVUxUOiAxNCxcbiAgICBFRkJJRzogMjcsXG4gICAgRUhPU1RVTlJFQUNIOiA2NSxcbiAgICBFSURSTTogOTAsXG4gICAgRUlMU0VROiA5MixcbiAgICBFSU5QUk9HUkVTUzogMzYsXG4gICAgRUlOVFI6IDQsXG4gICAgRUlOVkFMOiAyMixcbiAgICBFSU86IDUsXG4gICAgRUlTQ09OTjogNTYsXG4gICAgRUlTRElSOiAyMSxcbiAgICBFTE9PUDogNjIsXG4gICAgRU1GSUxFOiAyNCxcbiAgICBFTUxJTks6IDMxLFxuICAgIEVNU0dTSVpFOiA0MCxcbiAgICBFTVVMVElIT1A6IDk1LFxuICAgIEVOQU1FVE9PTE9ORzogNjMsXG4gICAgRU5FVERPV046IDUwLFxuICAgIEVORVRSRVNFVDogNTIsXG4gICAgRU5FVFVOUkVBQ0g6IDUxLFxuICAgIEVORklMRTogMjMsXG4gICAgRU5PQlVGUzogNTUsXG4gICAgRU5PREFUQTogOTYsXG4gICAgRU5PREVWOiAxOSxcbiAgICBFTk9FTlQ6IDIsXG4gICAgRU5PRVhFQzogOCxcbiAgICBFTk9MQ0s6IDc3LFxuICAgIEVOT0xJTks6IDk3LFxuICAgIEVOT01FTTogMTIsXG4gICAgRU5PTVNHOiA5MSxcbiAgICBFTk9QUk9UT09QVDogNDIsXG4gICAgRU5PU1BDOiAyOCxcbiAgICBFTk9TUjogOTgsXG4gICAgRU5PU1RSOiA5OSxcbiAgICBFTk9TWVM6IDc4LFxuICAgIEVOT1RDT05OOiA1NyxcbiAgICBFTk9URElSOiAyMCxcbiAgICBFTk9URU1QVFk6IDY2LFxuICAgIEVOT1RTT0NLOiAzOCxcbiAgICBFTk9UU1VQOiA0NSxcbiAgICBFTk9UVFk6IDI1LFxuICAgIEVOWElPOiA2LFxuICAgIEVPUE5PVFNVUFA6IDEwMixcbiAgICBFT1ZFUkZMT1c6IDg0LFxuICAgIEVQRVJNOiAxLFxuICAgIEVQSVBFOiAzMixcbiAgICBFUFJPVE86IDEwMCxcbiAgICBFUFJPVE9OT1NVUFBPUlQ6IDQzLFxuICAgIEVQUk9UT1RZUEU6IDQxLFxuICAgIEVSQU5HRTogMzQsXG4gICAgRVJPRlM6IDMwLFxuICAgIEVTUElQRTogMjksXG4gICAgRVNSQ0g6IDMsXG4gICAgRVNUQUxFOiA3MCxcbiAgICBFVElNRTogMTAxLFxuICAgIEVUSU1FRE9VVDogNjAsXG4gICAgRVRYVEJTWTogMjYsXG4gICAgRVdPVUxEQkxPQ0s6IDM1LFxuICAgIEVYREVWOiAxOCxcbiAgfSxcbiAgc2lnbmFsczoge1xuICAgIFNJR0hVUDogMSxcbiAgICBTSUdJTlQ6IDIsXG4gICAgU0lHUVVJVDogMyxcbiAgICBTSUdJTEw6IDQsXG4gICAgU0lHVFJBUDogNSxcbiAgICBTSUdBQlJUOiA2LFxuICAgIFNJR0lPVDogNixcbiAgICBTSUdCVVM6IDEwLFxuICAgIFNJR0ZQRTogOCxcbiAgICBTSUdLSUxMOiA5LFxuICAgIFNJR1VTUjE6IDMwLFxuICAgIFNJR1NFR1Y6IDExLFxuICAgIFNJR1VTUjI6IDMxLFxuICAgIFNJR1BJUEU6IDEzLFxuICAgIFNJR0FMUk06IDE0LFxuICAgIFNJR1RFUk06IDE1LFxuICAgIFNJR0NITEQ6IDIwLFxuICAgIFNJR0NPTlQ6IDE5LFxuICAgIFNJR1NUT1A6IDE3LFxuICAgIFNJR1RTVFA6IDE4LFxuICAgIFNJR1RUSU46IDIxLFxuICAgIFNJR0JSRUFLOiAyMSxcbiAgICBTSUdUVE9VOiAyMixcbiAgICBTSUdVUkc6IDE2LFxuICAgIFNJR1hDUFU6IDI0LFxuICAgIFNJR1hGU1o6IDI1LFxuICAgIFNJR1ZUQUxSTTogMjYsXG4gICAgU0lHUFJPRjogMjcsXG4gICAgU0lHV0lOQ0g6IDI4LFxuICAgIFNJR0lPOiAyMyxcbiAgICBTSUdJTkZPOiAyOSxcbiAgICBTSUdTWVM6IDEyLFxuICAgIFNJR0VNVDogNyxcbiAgICBTSUdQV1I6IDMwLCAvLyBUT0RPKHVraTAwYSk6IEluIFNvbGFyaXMsIHRoaXMgc2hvdWxkIGJlIGAxOWAuIElzIHRoZXJlIGFueSB3YXkgdG8gYWRkcmVzcyB0aGlzIGRpZmZlcmVuY2U/XG4gICAgU0lHU1RLRkxUOiAxNixcbiAgfSxcbiAgcHJpb3JpdHk6IHtcbiAgICBQUklPUklUWV9MT1c6IDE5LFxuICAgIFBSSU9SSVRZX0JFTE9XX05PUk1BTDogMTAsXG4gICAgUFJJT1JJVFlfTk9STUFMOiAwLFxuICAgIFBSSU9SSVRZX0FCT1ZFX05PUk1BTDogLTcsXG4gICAgUFJJT1JJVFlfSElHSDogLTE0LFxuICAgIFBSSU9SSVRZX0hJR0hFU1Q6IC0yMCxcbiAgfSxcbn0gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgZnMgPSB7XG4gIFVWX0ZTX1NZTUxJTktfRElSOiAxLFxuICBVVl9GU19TWU1MSU5LX0pVTkNUSU9OOiAyLFxuICBPX1JET05MWTogMCxcbiAgT19XUk9OTFk6IDEsXG4gIE9fUkRXUjogMixcbiAgVVZfRElSRU5UX1VOS05PV046IDAsXG4gIFVWX0RJUkVOVF9GSUxFOiAxLFxuICBVVl9ESVJFTlRfRElSOiAyLFxuICBVVl9ESVJFTlRfTElOSzogMyxcbiAgVVZfRElSRU5UX0ZJRk86IDQsXG4gIFVWX0RJUkVOVF9TT0NLRVQ6IDUsXG4gIFVWX0RJUkVOVF9DSEFSOiA2LFxuICBVVl9ESVJFTlRfQkxPQ0s6IDcsXG4gIFNfSUZNVDogNjE0NDAsXG4gIFNfSUZSRUc6IDMyNzY4LFxuICBTX0lGRElSOiAxNjM4NCxcbiAgU19JRkNIUjogODE5MixcbiAgU19JRkJMSzogMjQ1NzYsXG4gIFNfSUZJRk86IDQwOTYsXG4gIFNfSUZMTks6IDQwOTYwLFxuICBTX0lGU09DSzogNDkxNTIsXG4gIE9fQ1JFQVQ6IDUxMixcbiAgT19FWENMOiAyMDQ4LFxuICBVVl9GU19PX0ZJTEVNQVA6IDAsXG4gIE9fTk9DVFRZOiAxMzEwNzIsXG4gIE9fVFJVTkM6IDEwMjQsXG4gIE9fQVBQRU5EOiA4LFxuICBPX0RJUkVDVE9SWTogMTA0ODU3NixcbiAgT19OT0ZPTExPVzogMjU2LFxuICBPX1NZTkM6IDEyOCxcbiAgT19EU1lOQzogNDE5NDMwNCxcbiAgT19TWU1MSU5LOiAyMDk3MTUyLFxuICBPX05PTkJMT0NLOiA0LFxuICBTX0lSV1hVOiA0NDgsXG4gIFNfSVJVU1I6IDI1NixcbiAgU19JV1VTUjogMTI4LFxuICBTX0lYVVNSOiA2NCxcbiAgU19JUldYRzogNTYsXG4gIFNfSVJHUlA6IDMyLFxuICBTX0lXR1JQOiAxNixcbiAgU19JWEdSUDogOCxcbiAgU19JUldYTzogNyxcbiAgU19JUk9USDogNCxcbiAgU19JV09USDogMixcbiAgU19JWE9USDogMSxcbiAgRl9PSzogMCxcbiAgUl9PSzogNCxcbiAgV19PSzogMixcbiAgWF9PSzogMSxcbiAgVVZfRlNfQ09QWUZJTEVfRVhDTDogMSxcbiAgQ09QWUZJTEVfRVhDTDogMSxcbiAgVVZfRlNfQ09QWUZJTEVfRklDTE9ORTogMixcbiAgQ09QWUZJTEVfRklDTE9ORTogMixcbiAgVVZfRlNfQ09QWUZJTEVfRklDTE9ORV9GT1JDRTogNCxcbiAgQ09QWUZJTEVfRklDTE9ORV9GT1JDRTogNCxcbn0gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgY3J5cHRvID0ge1xuICBPUEVOU1NMX1ZFUlNJT05fTlVNQkVSOiAyNjk0ODgzMTksXG4gIFNTTF9PUF9BTEw6IDIxNDc0ODU3ODAsXG4gIFNTTF9PUF9BTExPV19OT19ESEVfS0VYOiAxMDI0LFxuICBTU0xfT1BfQUxMT1dfVU5TQUZFX0xFR0FDWV9SRU5FR09USUFUSU9OOiAyNjIxNDQsXG4gIFNTTF9PUF9DSVBIRVJfU0VSVkVSX1BSRUZFUkVOQ0U6IDQxOTQzMDQsXG4gIFNTTF9PUF9DSVNDT19BTllDT05ORUNUOiAzMjc2OCxcbiAgU1NMX09QX0NPT0tJRV9FWENIQU5HRTogODE5MixcbiAgU1NMX09QX0NSWVBUT1BST19UTFNFWFRfQlVHOiAyMTQ3NDgzNjQ4LFxuICBTU0xfT1BfRE9OVF9JTlNFUlRfRU1QVFlfRlJBR01FTlRTOiAyMDQ4LFxuICBTU0xfT1BfRVBIRU1FUkFMX1JTQTogMCxcbiAgU1NMX09QX0xFR0FDWV9TRVJWRVJfQ09OTkVDVDogNCxcbiAgU1NMX09QX01JQ1JPU09GVF9CSUdfU1NMVjNfQlVGRkVSOiAwLFxuICBTU0xfT1BfTUlDUk9TT0ZUX1NFU1NfSURfQlVHOiAwLFxuICBTU0xfT1BfTVNJRV9TU0xWMl9SU0FfUEFERElORzogMCxcbiAgU1NMX09QX05FVFNDQVBFX0NBX0ROX0JVRzogMCxcbiAgU1NMX09QX05FVFNDQVBFX0NIQUxMRU5HRV9CVUc6IDAsXG4gIFNTTF9PUF9ORVRTQ0FQRV9ERU1PX0NJUEhFUl9DSEFOR0VfQlVHOiAwLFxuICBTU0xfT1BfTkVUU0NBUEVfUkVVU0VfQ0lQSEVSX0NIQU5HRV9CVUc6IDAsXG4gIFNTTF9PUF9OT19DT01QUkVTU0lPTjogMTMxMDcyLFxuICBTU0xfT1BfTk9fRU5DUllQVF9USEVOX01BQzogNTI0Mjg4LFxuICBTU0xfT1BfTk9fUVVFUllfTVRVOiA0MDk2LFxuICBTU0xfT1BfTk9fUkVORUdPVElBVElPTjogMTA3Mzc0MTgyNCxcbiAgU1NMX09QX05PX1NFU1NJT05fUkVTVU1QVElPTl9PTl9SRU5FR09USUFUSU9OOiA2NTUzNixcbiAgU1NMX09QX05PX1NTTHYyOiAwLFxuICBTU0xfT1BfTk9fU1NMdjM6IDMzNTU0NDMyLFxuICBTU0xfT1BfTk9fVElDS0VUOiAxNjM4NCxcbiAgU1NMX09QX05PX1RMU3YxOiA2NzEwODg2NCxcbiAgU1NMX09QX05PX1RMU3YxXzE6IDI2ODQzNTQ1NixcbiAgU1NMX09QX05PX1RMU3YxXzI6IDEzNDIxNzcyOCxcbiAgU1NMX09QX05PX1RMU3YxXzM6IDUzNjg3MDkxMixcbiAgU1NMX09QX1BLQ1MxX0NIRUNLXzE6IDAsXG4gIFNTTF9PUF9QS0NTMV9DSEVDS18yOiAwLFxuICBTU0xfT1BfUFJJT1JJVElaRV9DSEFDSEE6IDIwOTcxNTIsXG4gIFNTTF9PUF9TSU5HTEVfREhfVVNFOiAwLFxuICBTU0xfT1BfU0lOR0xFX0VDREhfVVNFOiAwLFxuICBTU0xfT1BfU1NMRUFZXzA4MF9DTElFTlRfREhfQlVHOiAwLFxuICBTU0xfT1BfU1NMUkVGMl9SRVVTRV9DRVJUX1RZUEVfQlVHOiAwLFxuICBTU0xfT1BfVExTX0JMT0NLX1BBRERJTkdfQlVHOiAwLFxuICBTU0xfT1BfVExTX0Q1X0JVRzogMCxcbiAgU1NMX09QX1RMU19ST0xMQkFDS19CVUc6IDgzODg2MDgsXG4gIEVOR0lORV9NRVRIT0RfUlNBOiAxLFxuICBFTkdJTkVfTUVUSE9EX0RTQTogMixcbiAgRU5HSU5FX01FVEhPRF9ESDogNCxcbiAgRU5HSU5FX01FVEhPRF9SQU5EOiA4LFxuICBFTkdJTkVfTUVUSE9EX0VDOiAyMDQ4LFxuICBFTkdJTkVfTUVUSE9EX0NJUEhFUlM6IDY0LFxuICBFTkdJTkVfTUVUSE9EX0RJR0VTVFM6IDEyOCxcbiAgRU5HSU5FX01FVEhPRF9QS0VZX01FVEhTOiA1MTIsXG4gIEVOR0lORV9NRVRIT0RfUEtFWV9BU04xX01FVEhTOiAxMDI0LFxuICBFTkdJTkVfTUVUSE9EX0FMTDogNjU1MzUsXG4gIEVOR0lORV9NRVRIT0RfTk9ORTogMCxcbiAgREhfQ0hFQ0tfUF9OT1RfU0FGRV9QUklNRTogMixcbiAgREhfQ0hFQ0tfUF9OT1RfUFJJTUU6IDEsXG4gIERIX1VOQUJMRV9UT19DSEVDS19HRU5FUkFUT1I6IDQsXG4gIERIX05PVF9TVUlUQUJMRV9HRU5FUkFUT1I6IDgsXG4gIEFMUE5fRU5BQkxFRDogMSxcbiAgUlNBX1BLQ1MxX1BBRERJTkc6IDEsXG4gIFJTQV9TU0xWMjNfUEFERElORzogMixcbiAgUlNBX05PX1BBRERJTkc6IDMsXG4gIFJTQV9QS0NTMV9PQUVQX1BBRERJTkc6IDQsXG4gIFJTQV9YOTMxX1BBRERJTkc6IDUsXG4gIFJTQV9QS0NTMV9QU1NfUEFERElORzogNixcbiAgUlNBX1BTU19TQUxUTEVOX0RJR0VTVDogLTEsXG4gIFJTQV9QU1NfU0FMVExFTl9NQVhfU0lHTjogLTIsXG4gIFJTQV9QU1NfU0FMVExFTl9BVVRPOiAtMixcbiAgZGVmYXVsdENvcmVDaXBoZXJMaXN0OlxuICAgIFwiVExTX0FFU18yNTZfR0NNX1NIQTM4NDpUTFNfQ0hBQ0hBMjBfUE9MWTEzMDVfU0hBMjU2OlRMU19BRVNfMTI4X0dDTV9TSEEyNTY6RUNESEUtUlNBLUFFUzEyOC1HQ00tU0hBMjU2OkVDREhFLUVDRFNBLUFFUzEyOC1HQ00tU0hBMjU2OkVDREhFLVJTQS1BRVMyNTYtR0NNLVNIQTM4NDpFQ0RIRS1FQ0RTQS1BRVMyNTYtR0NNLVNIQTM4NDpESEUtUlNBLUFFUzEyOC1HQ00tU0hBMjU2OkVDREhFLVJTQS1BRVMxMjgtU0hBMjU2OkRIRS1SU0EtQUVTMTI4LVNIQTI1NjpFQ0RIRS1SU0EtQUVTMjU2LVNIQTM4NDpESEUtUlNBLUFFUzI1Ni1TSEEzODQ6RUNESEUtUlNBLUFFUzI1Ni1TSEEyNTY6REhFLVJTQS1BRVMyNTYtU0hBMjU2OkhJR0g6IWFOVUxMOiFlTlVMTDohRVhQT1JUOiFERVM6IVJDNDohTUQ1OiFQU0s6IVNSUDohQ0FNRUxMSUFcIixcbiAgVExTMV9WRVJTSU9OOiA3NjksXG4gIFRMUzFfMV9WRVJTSU9OOiA3NzAsXG4gIFRMUzFfMl9WRVJTSU9OOiA3NzEsXG4gIFRMUzFfM19WRVJTSU9OOiA3NzIsXG4gIFBPSU5UX0NPTlZFUlNJT05fQ09NUFJFU1NFRDogMixcbiAgUE9JTlRfQ09OVkVSU0lPTl9VTkNPTVBSRVNTRUQ6IDQsXG4gIFBPSU5UX0NPTlZFUlNJT05fSFlCUklEOiA2LFxufSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCB6bGliID0ge1xuICBaX05PX0ZMVVNIOiAwLFxuICBaX1BBUlRJQUxfRkxVU0g6IDEsXG4gIFpfU1lOQ19GTFVTSDogMixcbiAgWl9GVUxMX0ZMVVNIOiAzLFxuICBaX0ZJTklTSDogNCxcbiAgWl9CTE9DSzogNSxcbiAgWl9PSzogMCxcbiAgWl9TVFJFQU1fRU5EOiAxLFxuICBaX05FRURfRElDVDogMixcbiAgWl9FUlJOTzogLTEsXG4gIFpfU1RSRUFNX0VSUk9SOiAtMixcbiAgWl9EQVRBX0VSUk9SOiAtMyxcbiAgWl9NRU1fRVJST1I6IC00LFxuICBaX0JVRl9FUlJPUjogLTUsXG4gIFpfVkVSU0lPTl9FUlJPUjogLTYsXG4gIFpfTk9fQ09NUFJFU1NJT046IDAsXG4gIFpfQkVTVF9TUEVFRDogMSxcbiAgWl9CRVNUX0NPTVBSRVNTSU9OOiA5LFxuICBaX0RFRkFVTFRfQ09NUFJFU1NJT046IC0xLFxuICBaX0ZJTFRFUkVEOiAxLFxuICBaX0hVRkZNQU5fT05MWTogMixcbiAgWl9STEU6IDMsXG4gIFpfRklYRUQ6IDQsXG4gIFpfREVGQVVMVF9TVFJBVEVHWTogMCxcbiAgWkxJQl9WRVJOVU06IDQ3ODQsXG4gIERFRkxBVEU6IDEsXG4gIElORkxBVEU6IDIsXG4gIEdaSVA6IDMsXG4gIEdVTlpJUDogNCxcbiAgREVGTEFURVJBVzogNSxcbiAgSU5GTEFURVJBVzogNixcbiAgVU5aSVA6IDcsXG4gIEJST1RMSV9ERUNPREU6IDgsXG4gIEJST1RMSV9FTkNPREU6IDksXG4gIFpfTUlOX1dJTkRPV0JJVFM6IDgsXG4gIFpfTUFYX1dJTkRPV0JJVFM6IDE1LFxuICBaX0RFRkFVTFRfV0lORE9XQklUUzogMTUsXG4gIFpfTUlOX0NIVU5LOiA2NCxcbiAgWl9NQVhfQ0hVTks6IEluZmluaXR5LFxuICBaX0RFRkFVTFRfQ0hVTks6IDE2Mzg0LFxuICBaX01JTl9NRU1MRVZFTDogMSxcbiAgWl9NQVhfTUVNTEVWRUw6IDksXG4gIFpfREVGQVVMVF9NRU1MRVZFTDogOCxcbiAgWl9NSU5fTEVWRUw6IC0xLFxuICBaX01BWF9MRVZFTDogOSxcbiAgWl9ERUZBVUxUX0xFVkVMOiAtMSxcbiAgQlJPVExJX09QRVJBVElPTl9QUk9DRVNTOiAwLFxuICBCUk9UTElfT1BFUkFUSU9OX0ZMVVNIOiAxLFxuICBCUk9UTElfT1BFUkFUSU9OX0ZJTklTSDogMixcbiAgQlJPVExJX09QRVJBVElPTl9FTUlUX01FVEFEQVRBOiAzLFxuICBCUk9UTElfUEFSQU1fTU9ERTogMCxcbiAgQlJPVExJX01PREVfR0VORVJJQzogMCxcbiAgQlJPVExJX01PREVfVEVYVDogMSxcbiAgQlJPVExJX01PREVfRk9OVDogMixcbiAgQlJPVExJX0RFRkFVTFRfTU9ERTogMCxcbiAgQlJPVExJX1BBUkFNX1FVQUxJVFk6IDEsXG4gIEJST1RMSV9NSU5fUVVBTElUWTogMCxcbiAgQlJPVExJX01BWF9RVUFMSVRZOiAxMSxcbiAgQlJPVExJX0RFRkFVTFRfUVVBTElUWTogMTEsXG4gIEJST1RMSV9QQVJBTV9MR1dJTjogMixcbiAgQlJPVExJX01JTl9XSU5ET1dfQklUUzogMTAsXG4gIEJST1RMSV9NQVhfV0lORE9XX0JJVFM6IDI0LFxuICBCUk9UTElfTEFSR0VfTUFYX1dJTkRPV19CSVRTOiAzMCxcbiAgQlJPVExJX0RFRkFVTFRfV0lORE9XOiAyMixcbiAgQlJPVExJX1BBUkFNX0xHQkxPQ0s6IDMsXG4gIEJST1RMSV9NSU5fSU5QVVRfQkxPQ0tfQklUUzogMTYsXG4gIEJST1RMSV9NQVhfSU5QVVRfQkxPQ0tfQklUUzogMjQsXG4gIEJST1RMSV9QQVJBTV9ESVNBQkxFX0xJVEVSQUxfQ09OVEVYVF9NT0RFTElORzogNCxcbiAgQlJPVExJX1BBUkFNX1NJWkVfSElOVDogNSxcbiAgQlJPVExJX1BBUkFNX0xBUkdFX1dJTkRPVzogNixcbiAgQlJPVExJX1BBUkFNX05QT1NURklYOiA3LFxuICBCUk9UTElfUEFSQU1fTkRJUkVDVDogOCxcbiAgQlJPVExJX0RFQ09ERVJfUkVTVUxUX0VSUk9SOiAwLFxuICBCUk9UTElfREVDT0RFUl9SRVNVTFRfU1VDQ0VTUzogMSxcbiAgQlJPVExJX0RFQ09ERVJfUkVTVUxUX05FRURTX01PUkVfSU5QVVQ6IDIsXG4gIEJST1RMSV9ERUNPREVSX1JFU1VMVF9ORUVEU19NT1JFX09VVFBVVDogMyxcbiAgQlJPVExJX0RFQ09ERVJfUEFSQU1fRElTQUJMRV9SSU5HX0JVRkZFUl9SRUFMTE9DQVRJT046IDAsXG4gIEJST1RMSV9ERUNPREVSX1BBUkFNX0xBUkdFX1dJTkRPVzogMSxcbiAgQlJPVExJX0RFQ09ERVJfTk9fRVJST1I6IDAsXG4gIEJST1RMSV9ERUNPREVSX1NVQ0NFU1M6IDEsXG4gIEJST1RMSV9ERUNPREVSX05FRURTX01PUkVfSU5QVVQ6IDIsXG4gIEJST1RMSV9ERUNPREVSX05FRURTX01PUkVfT1VUUFVUOiAzLFxuICBCUk9UTElfREVDT0RFUl9FUlJPUl9GT1JNQVRfRVhVQkVSQU5UX05JQkJMRTogLTEsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0ZPUk1BVF9SRVNFUlZFRDogLTIsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0ZPUk1BVF9FWFVCRVJBTlRfTUVUQV9OSUJCTEU6IC0zLFxuICBCUk9UTElfREVDT0RFUl9FUlJPUl9GT1JNQVRfU0lNUExFX0hVRkZNQU5fQUxQSEFCRVQ6IC00LFxuICBCUk9UTElfREVDT0RFUl9FUlJPUl9GT1JNQVRfU0lNUExFX0hVRkZNQU5fU0FNRTogLTUsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0ZPUk1BVF9DTF9TUEFDRTogLTYsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0ZPUk1BVF9IVUZGTUFOX1NQQUNFOiAtNyxcbiAgQlJPVExJX0RFQ09ERVJfRVJST1JfRk9STUFUX0NPTlRFWFRfTUFQX1JFUEVBVDogLTgsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0ZPUk1BVF9CTE9DS19MRU5HVEhfMTogLTksXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0ZPUk1BVF9CTE9DS19MRU5HVEhfMjogLTEwLFxuICBCUk9UTElfREVDT0RFUl9FUlJPUl9GT1JNQVRfVFJBTlNGT1JNOiAtMTEsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0ZPUk1BVF9ESUNUSU9OQVJZOiAtMTIsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0ZPUk1BVF9XSU5ET1dfQklUUzogLTEzLFxuICBCUk9UTElfREVDT0RFUl9FUlJPUl9GT1JNQVRfUEFERElOR18xOiAtMTQsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0ZPUk1BVF9QQURESU5HXzI6IC0xNSxcbiAgQlJPVExJX0RFQ09ERVJfRVJST1JfRk9STUFUX0RJU1RBTkNFOiAtMTYsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0RJQ1RJT05BUllfTk9UX1NFVDogLTE5LFxuICBCUk9UTElfREVDT0RFUl9FUlJPUl9JTlZBTElEX0FSR1VNRU5UUzogLTIwLFxuICBCUk9UTElfREVDT0RFUl9FUlJPUl9BTExPQ19DT05URVhUX01PREVTOiAtMjEsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0FMTE9DX1RSRUVfR1JPVVBTOiAtMjIsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0FMTE9DX0NPTlRFWFRfTUFQOiAtMjUsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX0FMTE9DX1JJTkdfQlVGRkVSXzE6IC0yNixcbiAgQlJPVExJX0RFQ09ERVJfRVJST1JfQUxMT0NfUklOR19CVUZGRVJfMjogLTI3LFxuICBCUk9UTElfREVDT0RFUl9FUlJPUl9BTExPQ19CTE9DS19UWVBFX1RSRUVTOiAtMzAsXG4gIEJST1RMSV9ERUNPREVSX0VSUk9SX1VOUkVBQ0hBQkxFOiAtMzEsXG59IGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IHRyYWNlID0ge1xuICBUUkFDRV9FVkVOVF9QSEFTRV9CRUdJTjogNjYsXG4gIFRSQUNFX0VWRU5UX1BIQVNFX0VORDogNjksXG4gIFRSQUNFX0VWRU5UX1BIQVNFX0NPTVBMRVRFOiA4OCxcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfSU5TVEFOVDogNzMsXG4gIFRSQUNFX0VWRU5UX1BIQVNFX0FTWU5DX0JFR0lOOiA4MyxcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfQVNZTkNfU1RFUF9JTlRPOiA4NCxcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfQVNZTkNfU1RFUF9QQVNUOiAxMTIsXG4gIFRSQUNFX0VWRU5UX1BIQVNFX0FTWU5DX0VORDogNzAsXG4gIFRSQUNFX0VWRU5UX1BIQVNFX05FU1RBQkxFX0FTWU5DX0JFR0lOOiA5OCxcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfTkVTVEFCTEVfQVNZTkNfRU5EOiAxMDEsXG4gIFRSQUNFX0VWRU5UX1BIQVNFX05FU1RBQkxFX0FTWU5DX0lOU1RBTlQ6IDExMCxcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfRkxPV19CRUdJTjogMTE1LFxuICBUUkFDRV9FVkVOVF9QSEFTRV9GTE9XX1NURVA6IDExNixcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfRkxPV19FTkQ6IDEwMixcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfTUVUQURBVEE6IDc3LFxuICBUUkFDRV9FVkVOVF9QSEFTRV9DT1VOVEVSOiA2NyxcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfU0FNUExFOiA4MCxcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfQ1JFQVRFX09CSkVDVDogNzgsXG4gIFRSQUNFX0VWRU5UX1BIQVNFX1NOQVBTSE9UX09CSkVDVDogNzksXG4gIFRSQUNFX0VWRU5UX1BIQVNFX0RFTEVURV9PQkpFQ1Q6IDY4LFxuICBUUkFDRV9FVkVOVF9QSEFTRV9NRU1PUllfRFVNUDogMTE4LFxuICBUUkFDRV9FVkVOVF9QSEFTRV9NQVJLOiA4MixcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfQ0xPQ0tfU1lOQzogOTksXG4gIFRSQUNFX0VWRU5UX1BIQVNFX0VOVEVSX0NPTlRFWFQ6IDQwLFxuICBUUkFDRV9FVkVOVF9QSEFTRV9MRUFWRV9DT05URVhUOiA0MSxcbiAgVFJBQ0VfRVZFTlRfUEhBU0VfTElOS19JRFM6IDYxLFxufSBhcyBjb25zdDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBMEU7QUFDMUUsT0FBTyxNQUFNLEVBQUUsR0FBRztJQUNoQixlQUFlLEVBQUUsQ0FBQztJQUNsQixjQUFjLEVBQUUsQ0FBQztJQUNqQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLGVBQWUsRUFBRSxHQUFHO0lBQ3BCLE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxDQUFDO1FBQ1osUUFBUSxFQUFFLENBQUM7UUFDWCxXQUFXLEVBQUUsQ0FBQztRQUNkLFVBQVUsRUFBRSxDQUFDO0tBQ2Q7SUFDRCxLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsVUFBVSxFQUFFLEVBQUU7UUFDZCxhQUFhLEVBQUUsRUFBRTtRQUNqQixZQUFZLEVBQUUsRUFBRTtR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