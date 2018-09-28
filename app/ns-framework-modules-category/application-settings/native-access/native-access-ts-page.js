"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var utils = require("tns-core-modules/utils/utils");
function getAll() {
    if (platform_1.isAndroid) {
        var sharedPreferences = application_1.getNativeApplication().getApplicationContext().getSharedPreferences("prefs.db", 0);
        var mappedPreferences = sharedPreferences.getAll();
        var iterator = mappedPreferences.keySet().iterator();
        while (iterator.hasNext()) {
            var key = iterator.next();
            console.log(key);
            var value = mappedPreferences.get(key);
            console.log(value);
        }
    }
    else if (platform_1.isIOS) {
        var userDefaults = utils.ios.getter(NSUserDefaults, NSUserDefaults.standardUserDefaults);
        var dictionaryUserDefaults = userDefaults.dictionaryRepresentation();
        var allKeys = dictionaryUserDefaults.allKeys;
        console.log(allKeys);
        var allValues = dictionaryUserDefaults.allValues;
        console.log(allValues);
    }
}
exports.getAll = getAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWFjY2Vzcy10cy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF0aXZlLWFjY2Vzcy10cy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNERBQW9FO0FBQ3BFLHNEQUE2RDtBQUM3RCxvREFBc0Q7QUFFdEQ7SUFDSSxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztRQUNaLElBQU0saUJBQWlCLEdBQUcsa0NBQW9CLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RyxJQUFNLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JELElBQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXZELE9BQU8sUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDeEIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBTSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUVMLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQUssQ0FBQyxDQUFDLENBQUM7UUFHZixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDM0YsSUFBTSxzQkFBc0IsR0FBRyxZQUFZLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUV2RSxJQUFNLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFNLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUM7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0FBQ0wsQ0FBQztBQXhCRCx3QkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBhcHAtc2V0dGluZ3MtbmF0aXZlLWFjY2Vzcy10c1xuaW1wb3J0IHsgZ2V0TmF0aXZlQXBwbGljYXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUHJlZmVyZW5jZXMgPSBnZXROYXRpdmVBcHBsaWNhdGlvbigpLmdldEFwcGxpY2F0aW9uQ29udGV4dCgpLmdldFNoYXJlZFByZWZlcmVuY2VzKFwicHJlZnMuZGJcIiwgMCk7XG4gICAgICAgIGNvbnN0IG1hcHBlZFByZWZlcmVuY2VzID0gc2hhcmVkUHJlZmVyZW5jZXMuZ2V0QWxsKCk7XG4gICAgICAgIGNvbnN0IGl0ZXJhdG9yID0gbWFwcGVkUHJlZmVyZW5jZXMua2V5U2V0KCkuaXRlcmF0b3IoKTtcblxuICAgICAgICB3aGlsZSAoaXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpOyAvLyBteVN0cmluZywgbXlOdW1idmVyLCBpc1JlYWxcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFwcGVkUHJlZmVyZW5jZXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7IC8vIFwiSm9obiBEb2VcIiwgNDIsIHRydWVcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChpc0lPUykge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgLy8gTm90ZTogSWYgdXNpbmcgVHlwZVNjcmlwdCB5b3Ugd2lsbCBuZWVkIHRucy1wbGF0Zm9ybS1kZWNsYXJhdGlvbnMgcGx1Z2luIHRvIGFjY2VzcyB0aGUgbmF0aXZlIEFQSXMgbGlrZSBOU1VzZXJEZWZhdWx0c1xuICAgICAgICBjb25zdCB1c2VyRGVmYXVsdHMgPSB1dGlscy5pb3MuZ2V0dGVyKE5TVXNlckRlZmF1bHRzLCBOU1VzZXJEZWZhdWx0cy5zdGFuZGFyZFVzZXJEZWZhdWx0cyk7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnlVc2VyRGVmYXVsdHMgPSB1c2VyRGVmYXVsdHMuZGljdGlvbmFyeVJlcHJlc2VudGF0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgYWxsS2V5cyA9IGRpY3Rpb25hcnlVc2VyRGVmYXVsdHMuYWxsS2V5cztcbiAgICAgICAgY29uc29sZS5sb2coYWxsS2V5cyk7XG4gICAgICAgIGNvbnN0IGFsbFZhbHVlcyA9IGRpY3Rpb25hcnlVc2VyRGVmYXVsdHMuYWxsVmFsdWVzO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxWYWx1ZXMpO1xuICAgIH1cbn1cbi8vIDw8IGFwcC1zZXR0aW5ncy1uYXRpdmUtYWNjZXNzLXRzXG4iXX0=