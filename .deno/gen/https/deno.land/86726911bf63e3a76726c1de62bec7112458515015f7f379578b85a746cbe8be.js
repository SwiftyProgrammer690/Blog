// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as DenoUnstable from "../../_deno_unstable.ts";
import { makeCallback } from "./_fs_common.ts";
import { fs, os } from "../internal_binding/constants.ts";
import { getValidatedPath, getValidMode } from "../internal/fs/utils.mjs";
export function access(path, mode, callback) {
    if (typeof mode === "function") {
        callback = mode;
        mode = fs.F_OK;
    }
    path = getValidatedPath(path).toString();
    mode = getValidMode(mode, "access");
    const cb = makeCallback(callback);
    Deno.lstat(path).then((info)=>{
        const m = +mode || 0;
        let fileMode = +info.mode || 0;
        if (Deno.build.os !== "windows" && info.uid === DenoUnstable.getUid()) {
            // If the user is the owner of the file, then use the owner bits of
            // the file permission
            fileMode >>= 6;
        }
        // TODO(kt3k): Also check the case when the user belong to the group
        // of the file
        if ((m & fileMode) === m) {
            // all required flags exist
            cb(null);
        } else {
            // some required flags don't
            // deno-lint-ignore no-explicit-any
            const e = new Error(`EACCES: permission denied, access '${path}'`);
            e.path = path;
            e.syscall = "access";
            e.errno = os.errno.EACCES;
            e.code = "EACCES";
            cb(e);
        }
    }, (err)=>{
        if (err instanceof Deno.errors.NotFound) {
            // deno-lint-ignore no-explicit-any
            const e = new Error(`ENOENT: no such file or directory, access '${path}'`);
            e.path = path;
            e.syscall = "access";
            e.errno = os.errno.ENOENT;
            e.code = "ENOENT";
            cb(e);
        } else {
            cb(err);
        }
    });
}
export function accessSync(path, mode) {
    path = getValidatedPath(path).toString();
    mode = getValidMode(mode, "access");
    try {
        const info = Deno.lstatSync(path.toString());
        const m = +mode || 0;
        const fileMode = +info.mode || 0;
        // FIXME(kt3k): use the last digit of file mode as its mode for now
        // This is not correct if the user is the owner of the file
        // or is a member of the owner group
        if ((m & fileMode) === m) {
        // all required flags exist
        } else {
            // some required flags don't
            // deno-lint-ignore no-explicit-any
            const e = new Error(`EACCES: permission denied, access '${path}'`);
            e.path = path;
            e.syscall = "access";
            e.errno = os.errno.EACCES;
            e.code = "EACCES";
            throw e;
        }
    } catch (err) {
        if (err instanceof Deno.errors.NotFound) {
            // deno-lint-ignore no-explicit-any
            const e1 = new Error(`ENOENT: no such file or directory, access '${path}'`);
            e1.path = path;
            e1.syscall = "access";
            e1.errno = os.errno.ENOENT;
            e1.code = "ENOENT";
            throw e1;
        } else {
            throw err;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjE0Ny4wL25vZGUvX2ZzL19mc19hY2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTgtMjAyMiB0aGUgRGVubyBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgbGljZW5zZS5cbmltcG9ydCAqIGFzIERlbm9VbnN0YWJsZSBmcm9tIFwiLi4vLi4vX2Rlbm9fdW5zdGFibGUudHNcIjtcbmltcG9ydCB7IHR5cGUgQ2FsbGJhY2tXaXRoRXJyb3IsIG1ha2VDYWxsYmFjayB9IGZyb20gXCIuL19mc19jb21tb24udHNcIjtcbmltcG9ydCB7IGZzLCBvcyB9IGZyb20gXCIuLi9pbnRlcm5hbF9iaW5kaW5nL2NvbnN0YW50cy50c1wiO1xuaW1wb3J0IHsgZ2V0VmFsaWRhdGVkUGF0aCwgZ2V0VmFsaWRNb2RlIH0gZnJvbSBcIi4uL2ludGVybmFsL2ZzL3V0aWxzLm1qc1wiO1xuaW1wb3J0IHR5cGUgeyBCdWZmZXIgfSBmcm9tIFwiLi4vYnVmZmVyLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY2Nlc3MoXG4gIHBhdGg6IHN0cmluZyB8IEJ1ZmZlciB8IFVSTCxcbiAgbW9kZTogbnVtYmVyIHwgQ2FsbGJhY2tXaXRoRXJyb3IsXG4gIGNhbGxiYWNrPzogQ2FsbGJhY2tXaXRoRXJyb3IsXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiBtb2RlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IG1vZGU7XG4gICAgbW9kZSA9IGZzLkZfT0s7XG4gIH1cblxuICBwYXRoID0gZ2V0VmFsaWRhdGVkUGF0aChwYXRoKS50b1N0cmluZygpO1xuICBtb2RlID0gZ2V0VmFsaWRNb2RlKG1vZGUsIFwiYWNjZXNzXCIpO1xuICBjb25zdCBjYiA9IG1ha2VDYWxsYmFjayhjYWxsYmFjayk7XG5cbiAgRGVuby5sc3RhdChwYXRoKS50aGVuKChpbmZvKSA9PiB7XG4gICAgY29uc3QgbSA9ICttb2RlIHx8IDA7XG4gICAgbGV0IGZpbGVNb2RlID0gK2luZm8ubW9kZSEgfHwgMDtcbiAgICBpZiAoRGVuby5idWlsZC5vcyAhPT0gXCJ3aW5kb3dzXCIgJiYgaW5mby51aWQgPT09IERlbm9VbnN0YWJsZS5nZXRVaWQoKSkge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgaXMgdGhlIG93bmVyIG9mIHRoZSBmaWxlLCB0aGVuIHVzZSB0aGUgb3duZXIgYml0cyBvZlxuICAgICAgLy8gdGhlIGZpbGUgcGVybWlzc2lvblxuICAgICAgZmlsZU1vZGUgPj49IDY7XG4gICAgfVxuICAgIC8vIFRPRE8oa3Qzayk6IEFsc28gY2hlY2sgdGhlIGNhc2Ugd2hlbiB0aGUgdXNlciBiZWxvbmcgdG8gdGhlIGdyb3VwXG4gICAgLy8gb2YgdGhlIGZpbGVcbiAgICBpZiAoKG0gJiBmaWxlTW9kZSkgPT09IG0pIHtcbiAgICAgIC8vIGFsbCByZXF1aXJlZCBmbGFncyBleGlzdFxuICAgICAgY2IobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNvbWUgcmVxdWlyZWQgZmxhZ3MgZG9uJ3RcbiAgICAgIC8vIGRlbm8tbGludC1pZ25vcmUgbm8tZXhwbGljaXQtYW55XG4gICAgICBjb25zdCBlOiBhbnkgPSBuZXcgRXJyb3IoYEVBQ0NFUzogcGVybWlzc2lvbiBkZW5pZWQsIGFjY2VzcyAnJHtwYXRofSdgKTtcbiAgICAgIGUucGF0aCA9IHBhdGg7XG4gICAgICBlLnN5c2NhbGwgPSBcImFjY2Vzc1wiO1xuICAgICAgZS5lcnJubyA9IG9zLmVycm5vLkVBQ0NFUztcbiAgICAgIGUuY29kZSA9IFwiRUFDQ0VTXCI7XG4gICAgICBjYihlKTtcbiAgICB9XG4gIH0sIChlcnIpID0+IHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgRGVuby5lcnJvcnMuTm90Rm91bmQpIHtcbiAgICAgIC8vIGRlbm8tbGludC1pZ25vcmUgbm8tZXhwbGljaXQtYW55XG4gICAgICBjb25zdCBlOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBFTk9FTlQ6IG5vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnksIGFjY2VzcyAnJHtwYXRofSdgLFxuICAgICAgKTtcbiAgICAgIGUucGF0aCA9IHBhdGg7XG4gICAgICBlLnN5c2NhbGwgPSBcImFjY2Vzc1wiO1xuICAgICAgZS5lcnJubyA9IG9zLmVycm5vLkVOT0VOVDtcbiAgICAgIGUuY29kZSA9IFwiRU5PRU5UXCI7XG4gICAgICBjYihlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2IoZXJyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWNjZXNzU3luYyhwYXRoOiBzdHJpbmcgfCBCdWZmZXIgfCBVUkwsIG1vZGU/OiBudW1iZXIpOiB2b2lkIHtcbiAgcGF0aCA9IGdldFZhbGlkYXRlZFBhdGgocGF0aCkudG9TdHJpbmcoKTtcbiAgbW9kZSA9IGdldFZhbGlkTW9kZShtb2RlLCBcImFjY2Vzc1wiKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmZvID0gRGVuby5sc3RhdFN5bmMocGF0aC50b1N0cmluZygpKTtcbiAgICBjb25zdCBtID0gK21vZGUhIHx8IDA7XG4gICAgY29uc3QgZmlsZU1vZGUgPSAraW5mby5tb2RlISB8fCAwO1xuICAgIC8vIEZJWE1FKGt0M2spOiB1c2UgdGhlIGxhc3QgZGlnaXQgb2YgZmlsZSBtb2RlIGFzIGl0cyBtb2RlIGZvciBub3dcbiAgICAvLyBUaGlzIGlzIG5vdCBjb3JyZWN0IGlmIHRoZSB1c2VyIGlzIHRoZSBvd25lciBvZiB0aGUgZmlsZVxuICAgIC8vIG9yIGlzIGEgbWVtYmVyIG9mIHRoZSBvd25lciBncm91cFxuICAgIGlmICgobSAmIGZpbGVNb2RlKSA9PT0gbSkge1xuICAgICAgLy8gYWxsIHJlcXVpcmVkIGZsYWdzIGV4aXN0XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNvbWUgcmVxdWlyZWQgZmxhZ3MgZG9uJ3RcbiAgICAgIC8vIGRlbm8tbGludC1pZ25vcmUgbm8tZXhwbGljaXQtYW55XG4gICAgICBjb25zdCBlOiBhbnkgPSBuZXcgRXJyb3IoYEVBQ0NFUzogcGVybWlzc2lvbiBkZW5pZWQsIGFjY2VzcyAnJHtwYXRofSdgKTtcbiAgICAgIGUucGF0aCA9IHBhdGg7XG4gICAgICBlLnN5c2NhbGwgPSBcImFjY2Vzc1wiO1xuICAgICAgZS5lcnJubyA9IG9zLmVycm5vLkVBQ0NFUztcbiAgICAgIGUuY29kZSA9IFwiRUFDQ0VTXCI7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciBpbnN0YW5jZW9mIERlbm8uZXJyb3JzLk5vdEZvdW5kKSB7XG4gICAgICAvLyBkZW5vLWxpbnQtaWdub3JlIG5vLWV4cGxpY2l0LWFueVxuICAgICAgY29uc3QgZTogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgRU5PRU5UOiBubyBzdWNoIGZpbGUgb3IgZGlyZWN0b3J5LCBhY2Nlc3MgJyR7cGF0aH0nYCxcbiAgICAgICk7XG4gICAgICBlLnBhdGggPSBwYXRoO1xuICAgICAgZS5zeXNjYWxsID0gXCJhY2Nlc3NcIjtcbiAgICAgIGUuZXJybm8gPSBvcy5lcnJuby5FTk9FTlQ7XG4gICAgICBlLmNvZGUgPSBcIkVOT0VOVFwiO1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTtBQUMxRSxZQUFZLFlBQVksTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxTQUFpQyxZQUFZLFFBQVEsaUJBQWlCLENBQUM7QUFDdkUsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLGtDQUFrQyxDQUFDO0FBQzFELFNBQVMsZ0JBQWdCLEVBQUUsWUFBWSxRQUFRLDBCQUEwQixDQUFDO0FBRzFFLE9BQU8sU0FBUyxNQUFNLENBQ3BCLElBQTJCLEVBQzNCLElBQWdDLEVBQ2hDLFFBQTRCLEVBQ3RCO0lBQ04sSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7UUFDOUIsUUFB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