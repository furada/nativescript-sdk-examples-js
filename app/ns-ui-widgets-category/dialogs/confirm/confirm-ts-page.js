"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function onNavigatedTo(args) {
    showConfirmDialog();
}
exports.onNavigatedTo = onNavigatedTo;
function showConfirmDialog() {
    var confirmOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral"
    };
    dialogs_1.confirm(confirmOptions)
        .then(function (result) {
        console.log(result);
    });
}
exports.showConfirmDialog = showConfirmDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS10cy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlybS10cy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQXNFO0FBRXRFLHVCQUE4QixJQUFJO0lBUy9CLGlCQUFpQixFQUFFLENBQUM7QUFDdkIsQ0FBQztBQVZELHNDQVVDO0FBRUQ7SUFHSSxJQUFNLGNBQWMsR0FBbUI7UUFDbkMsS0FBSyxFQUFFLFlBQVk7UUFDbkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsWUFBWSxFQUFFLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxTQUFTO0tBQy9CLENBQUM7SUFDRixpQkFBTyxDQUFDLGNBQWMsQ0FBQztTQUNsQixJQUFJLENBQUMsVUFBQyxNQUFNO1FBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztBQUVYLENBQUM7QUFoQkQsOENBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlybSwgQ29uZmlybU9wdGlvbnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3MpIHtcbiAgICAvKlxuICAgIC8vID4+IGRpYWxvZy1jb25maXJtLXdlYi10c1xuICAgIGNvbmZpcm0oXCJZb3VyIG1lc3NhZ2VcIikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgfSk7XG4gICAgLy8gPDwgZGlhbG9nLWNvbmZpcm0td2ViLXRzXG4gICAgKi9cblxuICAgc2hvd0NvbmZpcm1EaWFsb2coKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb25maXJtRGlhbG9nKCkge1xuICAgIC8vID4+IGRpYWxvZy1jb25maXJtLXRzXG4gICAgLy8gaW1wb3J0IHsgY29uZmlybSwgQ29uZmlybU9wdGlvbnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG4gICAgY29uc3QgY29uZmlybU9wdGlvbnM6IENvbmZpcm1PcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogXCJZb3VyIHRpdGxlXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiWW91ciBtZXNzYWdlXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsXCJcbiAgICB9O1xuICAgIGNvbmZpcm0oY29uZmlybU9wdGlvbnMpXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIHJlc3VsdCBjYW4gYmUgdHJ1ZS9mYWxzZS91bmRlZmluZWRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIC8vIDw8IGRpYWxvZy1jb25maXJtLXRzXG59XG4iXX0=