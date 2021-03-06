"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function onNavigatedTo(args) {
    showLoginDialog();
}
exports.onNavigatedTo = onNavigatedTo;
function showLoginDialog() {
    var loginOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userName: "Username",
        password: "Password"
    };
    dialogs_1.login(loginOptions).then(function (r) {
        console.log("Dialog result: ", r.result);
        console.log("User: " + r.userName + "  Password: " + r.password, r.userName, r.password);
    });
}
exports.showLoginDialog = showLoginDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1REFBa0U7QUFFbEUsdUJBQThCLElBQUk7SUFVOUIsZUFBZSxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQVhELHNDQVdDO0FBRUQ7SUFHSSxJQUFNLFlBQVksR0FBaUI7UUFDL0IsS0FBSyxFQUFFLFlBQVk7UUFDbkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsWUFBWSxFQUFFLE9BQU87UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxVQUFVO0tBQ3ZCLENBQUM7SUFDRixlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsQ0FBQyxDQUFDLFFBQVEsb0JBQWUsQ0FBQyxDQUFDLFFBQVUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUM7QUFqQkQsMENBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBsb2dpbiwgTG9naW5PcHRpb25zIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzKSB7XG4gICAgLypcbiAgICAvLyA+PiBkaWFsb2ctbG9naW4td2ViLXRzXG4gICAgbG9naW4oXCJZb3VyIG1lc3NhZ2VcIiwgXCJVc2VybmFtZVwiLCBcIlBhc3N3b3JkXCIpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiwgci5yZXN1bHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhgVXNlcjogJHtyLnVzZXJOYW1lfSAgUGFzc3dvcmQ6ICR7ci5wYXNzd29yZH1gLCByLnVzZXJOYW1lLCByLnBhc3N3b3JkKTtcbiAgICB9KTtcbiAgICAvLyA8PCBkaWFsb2ctbG9naW4td2ViLXRzXG4gICAgKi9cblxuICAgIHNob3dMb2dpbkRpYWxvZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvZ2luRGlhbG9nKCkge1xuICAgIC8vID4+IGRpYWxvZy1sb2dpbi10c1xuICAgIC8vIGltcG9ydCB7IGxvZ2luLCBMb2dpbk9wdGlvbnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG4gICAgY29uc3QgbG9naW5PcHRpb25zOiBMb2dpbk9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiBcIllvdXIgdGl0bGVcIixcbiAgICAgICAgbWVzc2FnZTogXCJZb3VyIG1lc3NhZ2VcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIkxvZ2luXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5ldXRyYWxcIixcbiAgICAgICAgdXNlck5hbWU6IFwiVXNlcm5hbWVcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiUGFzc3dvcmRcIlxuICAgIH07XG4gICAgbG9naW4obG9naW5PcHRpb25zKS50aGVuKChyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIsIHIucmVzdWx0KTtcbiAgICAgICAgY29uc29sZS5sb2coYFVzZXI6ICR7ci51c2VyTmFtZX0gIFBhc3N3b3JkOiAke3IucGFzc3dvcmR9YCwgci51c2VyTmFtZSwgci5wYXNzd29yZCk7XG4gICAgfSk7XG4gICAgLy8gPDwgZGlhbG9nLWxvZ2luLXRzXG59XG4iXX0=