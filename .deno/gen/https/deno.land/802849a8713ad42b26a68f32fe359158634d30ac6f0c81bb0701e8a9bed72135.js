// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { CFISBIS } from "./_fs_stat.ts";
export function fstat(fd, optionsOrCallback, maybeCallback) {
    const callback = typeof optionsOrCallback === "function" ? optionsOrCallback : maybeCallback;
    const options = typeof optionsOrCallback === "object" ? optionsOrCallback : {
        bigint: false
    };
    if (!callback) throw new Error("No callback function supplied");
    Deno.fstat(fd).then((stat)=>callback(null, CFISBIS(stat, options.bigint)), (err)=>callback(err));
}
export function fstatSync(fd, options) {
    const origin = Deno.fstatSync(fd);
    return CFISBIS(origin, options?.bigint || false);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjE0Ny4wL25vZGUvX2ZzL19mc19mc3RhdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOC0yMDIyIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuaW1wb3J0IHtcbiAgQmlnSW50U3RhdHMsXG4gIENGSVNCSVMsXG4gIHN0YXRDYWxsYmFjayxcbiAgc3RhdENhbGxiYWNrQmlnSW50LFxuICBzdGF0T3B0aW9ucyxcbiAgU3RhdHMsXG59IGZyb20gXCIuL19mc19zdGF0LnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmc3RhdChmZDogbnVtYmVyLCBjYWxsYmFjazogc3RhdENhbGxiYWNrKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiBmc3RhdChcbiAgZmQ6IG51bWJlcixcbiAgb3B0aW9uczogeyBiaWdpbnQ6IGZhbHNlIH0sXG4gIGNhbGxiYWNrOiBzdGF0Q2FsbGJhY2ssXG4pOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIGZzdGF0KFxuICBmZDogbnVtYmVyLFxuICBvcHRpb25zOiB7IGJpZ2ludDogdHJ1ZSB9LFxuICBjYWxsYmFjazogc3RhdENhbGxiYWNrQmlnSW50LFxuKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiBmc3RhdChcbiAgZmQ6IG51bWJlcixcbiAgb3B0aW9uc09yQ2FsbGJhY2s6IHN0YXRDYWxsYmFjayB8IHN0YXRDYWxsYmFja0JpZ0ludCB8IHN0YXRPcHRpb25zLFxuICBtYXliZUNhbGxiYWNrPzogc3RhdENhbGxiYWNrIHwgc3RhdENhbGxiYWNrQmlnSW50LFxuKSB7XG4gIGNvbnN0IGNhbGxiYWNrID1cbiAgICAodHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gb3B0aW9uc09yQ2FsbGJhY2tcbiAgICAgIDogbWF5YmVDYWxsYmFjaykgYXMgKFxuICAgICAgICAuLi5hcmdzOiBbRXJyb3JdIHwgW251bGwsIEJpZ0ludFN0YXRzIHwgU3RhdHNdXG4gICAgICApID0+IHZvaWQ7XG4gIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uc09yQ2FsbGJhY2sgPT09IFwib2JqZWN0XCJcbiAgICA/IG9wdGlvbnNPckNhbGxiYWNrXG4gICAgOiB7IGJpZ2ludDogZmFsc2UgfTtcblxuICBpZiAoIWNhbGxiYWNrKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYWxsYmFjayBmdW5jdGlvbiBzdXBwbGllZFwiKTtcblxuICBEZW5vLmZzdGF0KGZkKS50aGVuKFxuICAgIChzdGF0KSA9PiBjYWxsYmFjayhudWxsLCBDRklTQklTKHN0YXQsIG9wdGlvbnMuYmlnaW50KSksXG4gICAgKGVycikgPT4gY2FsbGJhY2soZXJyKSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZzdGF0U3luYyhmZDogbnVtYmVyKTogU3RhdHM7XG5leHBvcnQgZnVuY3Rpb24gZnN0YXRTeW5jKFxuICBmZDogbnVtYmVyLFxuICBvcHRpb25zOiB7IGJpZ2ludDogZmFsc2UgfSxcbik6IFN0YXRzO1xuZXhwb3J0IGZ1bmN0aW9uIGZzdGF0U3luYyhcbiAgZmQ6IG51bWJlcixcbiAgb3B0aW9uczogeyBiaWdpbnQ6IHRydWUgfSxcbik6IEJpZ0ludFN0YXRzO1xuZXhwb3J0IGZ1bmN0aW9uIGZzdGF0U3luYyhcbiAgZmQ6IG51bWJlcixcbiAgb3B0aW9ucz86IHN0YXRPcHRpb25zLFxuKTogU3RhdHMgfCBCaWdJbnRTdGF0cyB7XG4gIGNvbnN0IG9yaWdpbiA9IERlbm8uZnN0YXRTeW5jKGZkKTtcbiAgcmV0dXJuIENGSVNCSVMob3JpZ2luLCBvcHRpb25zPy5iaWdpbnQgfHwgZmFsc2UpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTtBQUMxRSxTQUVFLE9BQU8sUUFLRixlQUFlLENBQUM7QUFhdkIsT0FBTyxTQUFTLEtBQUssQ0FDbkIsRUFBVSxFQUNWLGlCQUFrRSxFQUNsRSxhQUFpRCxFQUNqRDtJQUNBLE1BQU0sUUFBUSxHQUNYLE9BQU8saUJBQWlCLEtBQUssVUFBVSxHQUNwQyxpQkFBaUIsR0FDakIsYUFBYSxBQUVOLEFBQUM7SUFDZCxNQUFNLE9BQU8sR0FBRyxPQUFPLGlCQUFpQixLQUFLLFFBQVEsR0FDakQsaUJBQWlCLEdBQ2pCO1FBQUUsTUFBTSxFQUFFLEtBQUs7S0FBRSxBQUFDO0lBRXRCLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBRWhFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNqQixDQUFDLElBQUksR0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQ3ZELENBQUMsR0FBRyxHQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FDdkIsQ0FBQztDQUNIO0FBV0QsT0FBTyxTQUFTLFNBQVMsQ0FDdkIsRUFBVSxFQUNWLE9BQXFCLEVBQ0E7SUFDckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQUFBQztJQUNsQyxPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQztDQUNsRCJ9