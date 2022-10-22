/*!
 * Adapted directly from negotiator at https://github.com/jshttp/negotiator/
 * which is licensed as follows:
 *
 * (The MIT License)
 *
 * Copyright (c) 2012-2014 Federico Romero
 * Copyright (c) 2012-2014 Isaac Z. Schlueter
 * Copyright (c) 2014-2015 Douglas Christopher Wilson
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ import { compareSpecs, isQuality } from "./common.ts";
const SIMPLE_CHARSET_REGEXP = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
function parseCharset(str, i) {
    const match = SIMPLE_CHARSET_REGEXP.exec(str);
    if (!match) {
        return;
    }
    const [, charset] = match;
    let q = 1;
    if (match[2]) {
        const params = match[2].split(";");
        for (const param of params){
            const [key, value] = param.trim().split("=");
            if (key === "q") {
                q = parseFloat(value);
                break;
            }
        }
    }
    return {
        charset,
        q,
        i
    };
}
function parseAcceptCharset(accept) {
    const accepts = accept.split(",");
    const result = [];
    for(let i = 0; i < accepts.length; i++){
        const charset = parseCharset(accepts[i].trim(), i);
        if (charset) {
            result.push(charset);
        }
    }
    return result;
}
function specify(charset, spec, i) {
    let s = 0;
    if (spec.charset.toLowerCase() === charset.toLocaleLowerCase()) {
        s |= 1;
    } else if (spec.charset !== "*") {
        return;
    }
    return {
        i,
        o: spec.i,
        q: spec.q,
        s
    };
}
function getCharsetPriority(charset, accepted, index) {
    let priority = {
        i: -1,
        o: -1,
        q: 0,
        s: 0
    };
    for (const accepts of accepted){
        const spec = specify(charset, accepts, index);
        if (spec && ((priority.s ?? 0) - (spec.s ?? 0) || priority.q - spec.q || (priority.o ?? 0) - (spec.o ?? 0)) < 0) {
            priority = spec;
        }
    }
    return priority;
}
export function preferredCharsets(accept = "*", provided) {
    const accepts = parseAcceptCharset(accept);
    if (!provided) {
        return accepts.filter(isQuality).sort(compareSpecs).map((spec)=>spec.charset
        );
    }
    const priorities = provided.map((type, index)=>getCharsetPriority(type, accepts, index)
    );
    return priorities.filter(isQuality).sort(compareSpecs).map((priority)=>provided[priorities.indexOf(priority)]
    );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3gvb2FrQHYxMC4xLjAvbmVnb3RpYXRpb24vY2hhcnNldC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFkYXB0ZWQgZGlyZWN0bHkgZnJvbSBuZWdvdGlhdG9yIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2h0dHAvbmVnb3RpYXRvci9cbiAqIHdoaWNoIGlzIGxpY2Vuc2VkIGFzIGZvbGxvd3M6XG4gKlxuICogKFRoZSBNSVQgTGljZW5zZSlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNCBGZWRlcmljbyBSb21lcm9cbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE0IElzYWFjIFouIFNjaGx1ZXRlclxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbiAqIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuICogJ1NvZnR3YXJlJyksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuICogd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuICogZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG4gKiBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbiAqIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbiAqIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG4gKiBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuICogVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcbiAqIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IGNvbXBhcmVTcGVjcywgaXNRdWFsaXR5LCBTcGVjaWZpY2l0eSB9IGZyb20gXCIuL2NvbW1vbi50c1wiO1xuXG5pbnRlcmZhY2UgQ2hhcnNldFNwZWNpZmljaXR5IGV4dGVuZHMgU3BlY2lmaWNpdHkge1xuICBjaGFyc2V0OiBzdHJpbmc7XG59XG5cbmNvbnN0IFNJTVBMRV9DSEFSU0VUX1JFR0VYUCA9IC9eXFxzKihbXlxccztdKylcXHMqKD86OyguKikpPyQvO1xuXG5mdW5jdGlvbiBwYXJzZUNoYXJzZXQoc3RyOiBzdHJpbmcsIGk6IG51bWJlcik6IENoYXJzZXRTcGVjaWZpY2l0eSB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IG1hdGNoID0gU0lNUExFX0NIQVJTRVRfUkVHRVhQLmV4ZWMoc3RyKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IFssIGNoYXJzZXRdID0gbWF0Y2g7XG4gIGxldCBxID0gMTtcbiAgaWYgKG1hdGNoWzJdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbWF0Y2hbMl0uc3BsaXQoXCI7XCIpO1xuICAgIGZvciAoY29uc3QgcGFyYW0gb2YgcGFyYW1zKSB7XG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYXJhbS50cmltKCkuc3BsaXQoXCI9XCIpO1xuICAgICAgaWYgKGtleSA9PT0gXCJxXCIpIHtcbiAgICAgICAgcSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBjaGFyc2V0LCBxLCBpIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWNjZXB0Q2hhcnNldChhY2NlcHQ6IHN0cmluZyk6IENoYXJzZXRTcGVjaWZpY2l0eVtdIHtcbiAgY29uc3QgYWNjZXB0cyA9IGFjY2VwdC5zcGxpdChcIixcIik7XG4gIGNvbnN0IHJlc3VsdDogQ2hhcnNldFNwZWNpZmljaXR5W10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2VwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGFyc2V0ID0gcGFyc2VDaGFyc2V0KGFjY2VwdHNbaV0udHJpbSgpLCBpKTtcbiAgICBpZiAoY2hhcnNldCkge1xuICAgICAgcmVzdWx0LnB1c2goY2hhcnNldCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNwZWNpZnkoXG4gIGNoYXJzZXQ6IHN0cmluZyxcbiAgc3BlYzogQ2hhcnNldFNwZWNpZmljaXR5LFxuICBpOiBudW1iZXIsXG4pOiBTcGVjaWZpY2l0eSB8IHVuZGVmaW5lZCB7XG4gIGxldCBzID0gMDtcbiAgaWYgKHNwZWMuY2hhcnNldC50b0xvd2VyQ2FzZSgpID09PSBjaGFyc2V0LnRvTG9jYWxlTG93ZXJDYXNlKCkpIHtcbiAgICBzIHw9IDE7XG4gIH0gZWxzZSBpZiAoc3BlYy5jaGFyc2V0ICE9PSBcIipcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiB7IGksIG86IHNwZWMuaSwgcTogc3BlYy5xLCBzIH07XG59XG5cbmZ1bmN0aW9uIGdldENoYXJzZXRQcmlvcml0eShcbiAgY2hhcnNldDogc3RyaW5nLFxuICBhY2NlcHRlZDogQ2hhcnNldFNwZWNpZmljaXR5W10sXG4gIGluZGV4OiBudW1iZXIsXG4pOiBTcGVjaWZpY2l0eSB7XG4gIGxldCBwcmlvcml0eTogU3BlY2lmaWNpdHkgPSB7IGk6IC0xLCBvOiAtMSwgcTogMCwgczogMCB9O1xuICBmb3IgKGNvbnN0IGFjY2VwdHMgb2YgYWNjZXB0ZWQpIHtcbiAgICBjb25zdCBzcGVjID0gc3BlY2lmeShjaGFyc2V0LCBhY2NlcHRzLCBpbmRleCk7XG4gICAgaWYgKFxuICAgICAgc3BlYyAmJlxuICAgICAgKChwcmlvcml0eS5zID8/IDApIC0gKHNwZWMucyA/PyAwKSB8fCBwcmlvcml0eS5xIC0gc3BlYy5xIHx8XG4gICAgICAgICAgKHByaW9yaXR5Lm8gPz8gMCkgLSAoc3BlYy5vID8/IDApKSA8IDBcbiAgICApIHtcbiAgICAgIHByaW9yaXR5ID0gc3BlYztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZmVycmVkQ2hhcnNldHMoYWNjZXB0ID0gXCIqXCIsIHByb3ZpZGVkPzogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGFjY2VwdHMgPSBwYXJzZUFjY2VwdENoYXJzZXQoYWNjZXB0KTtcblxuICBpZiAoIXByb3ZpZGVkKSB7XG4gICAgcmV0dXJuIGFjY2VwdHNcbiAgICAgIC5maWx0ZXIoaXNRdWFsaXR5KVxuICAgICAgLnNvcnQoY29tcGFyZVNwZWNzKVxuICAgICAgLm1hcCgoc3BlYykgPT4gc3BlYy5jaGFyc2V0KTtcbiAgfVxuXG4gIGNvbnN0IHByaW9yaXRpZXMgPSBwcm92aWRlZFxuICAgIC5tYXAoKHR5cGUsIGluZGV4KSA9PiBnZXRDaGFyc2V0UHJpb3JpdHkodHlwZSwgYWNjZXB0cywgaW5kZXgpKTtcblxuICByZXR1cm4gcHJpb3JpdGllc1xuICAgIC5maWx0ZXIoaXNRdWFsaXR5KVxuICAgIC5zb3J0KGNvbXBhcmVTcGVjcylcbiAgICAubWFwKChwcmlvcml0eSkgPT4gcHJvdmlkZWRbcHJpb3JpdGllcy5pbmRleE9mKHByaW9yaXR5KV0pO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBNEJHLEFBNUJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNEJHLEFBNUJILEVBNEJHLENBRUgsTUFBTSxHQUFHLFlBQVksRUFBRSxTQUFTLFFBQXFCLENBQWE7QUFNbEUsS0FBSyxDQUFDLHFCQUFxQjtTQUVsQixZQUFZLENBQUMsR0FBVyxFQUFFLENBQVMsRUFBa0MsQ0FBQztJQUM3RSxLQUFLLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHO0lBQzVDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNYLE1BQU07SUFDUixDQUFDO0lBRUQsS0FBSyxJQUFJLE9BQU8sSUFBSSxLQUFLO0lBQ3pCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNULEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDYixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUc7UUFDakMsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFFLENBQUM7WUFDM0IsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBRztZQUMzQyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUcsSUFBRSxDQUFDO2dCQUNoQixDQUFDLEdB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