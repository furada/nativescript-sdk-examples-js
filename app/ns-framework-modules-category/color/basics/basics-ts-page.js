"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var knownColors = require("tns-core-modules/color/known-colors");
function onNavigatedTo(args) {
    var red = new color_1.Color("#FF0000");
    var isRed = red.equals(new color_1.Color("red"));
    console.log("Are both colors identical: ", isRed);
}
exports.onNavigatedTo = onNavigatedTo;
function onLabel1Loaded(args) {
    var label = args.object;
    var color = new color_1.Color("#FF0000");
    label.backgroundColor = color;
}
exports.onLabel1Loaded = onLabel1Loaded;
function onLabel2Loaded(args) {
    var label = args.object;
    var color = new color_1.Color("#F80");
    label.backgroundColor = color;
}
exports.onLabel2Loaded = onLabel2Loaded;
function onLabel3Loaded(args) {
    var label = args.object;
    var color = new color_1.Color(100, 255, 100, 100);
    label.backgroundColor = color;
}
exports.onLabel3Loaded = onLabel3Loaded;
function onLabel4Loaded(args) {
    var label = args.object;
    var color = new color_1.Color(0x64646464);
    label.backgroundColor = color;
}
exports.onLabel4Loaded = onLabel4Loaded;
function onLabel5Loaded(args) {
    var label = args.object;
    var color = new color_1.Color(knownColors.OrangeRed);
    label.backgroundColor = color;
}
exports.onLabel5Loaded = onLabel5Loaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUErQztBQUMvQyxpRUFBbUU7QUFFbkUsdUJBQThCLElBQUk7SUFFOUIsSUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGFBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFdEQsQ0FBQztBQU5ELHNDQU1DO0FBRUQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUkxQixJQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUduQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztBQUNsQyxDQUFDO0FBVEQsd0NBU0M7QUFFRCx3QkFBK0IsSUFBSTtJQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBSTFCLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBR2hDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLENBQUM7QUFURCx3Q0FTQztBQUVELHdCQUErQixJQUFJO0lBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFJMUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFHNUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDbEMsQ0FBQztBQVRELHdDQVNDO0FBRUQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUkxQixJQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUdwQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztBQUNsQyxDQUFDO0FBVEQsd0NBU0M7QUFFRCx3QkFBK0IsSUFBSTtJQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBSzFCLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUcvQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztBQUNsQyxDQUFDO0FBVkQsd0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5pbXBvcnQgKiBhcyBrbm93bkNvbG9ycyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9rbm93bi1jb2xvcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJncykge1xuICAgIC8vID4+IGNvbG9yLWNvbXBhcmVcbiAgICBjb25zdCByZWQgPSBuZXcgQ29sb3IoXCIjRkYwMDAwXCIpO1xuICAgIGNvbnN0IGlzUmVkID0gcmVkLmVxdWFscyhuZXcgQ29sb3IoXCJyZWRcIikpO1xuICAgIGNvbnNvbGUubG9nKFwiQXJlIGJvdGggY29sb3JzIGlkZW50aWNhbDogXCIsIGlzUmVkKTtcbiAgICAvLyA8PCBjb2xvci1jb21wYXJlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxhYmVsMUxvYWRlZChhcmdzKSB7XG4gICAgY29uc3QgbGFiZWwgPSBhcmdzLm9iamVjdDtcblxuICAgIC8vID4+IGNvbG9yLWhleC1mdWxsXG4gICAgLy8gQ3JlYXRlcyB0aGUgcmVkIGNvbG9yXG4gICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IoXCIjRkYwMDAwXCIpO1xuICAgIC8vIDw8IGNvbG9yLWhleC1mdWxsXG5cbiAgICBsYWJlbC5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTGFiZWwyTG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zdCBsYWJlbCA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgLy8gPj4gY29sb3ItaGV4LXNob3J0XG4gICAgLy8gQ3JlYXRlcyB0aGUgY29sb3IgI0ZGODgwMFxuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKFwiI0Y4MFwiKTtcbiAgICAvLyA8PCBjb2xvci1oZXgtc2hvcnRcblxuICAgIGxhYmVsLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25MYWJlbDNMb2FkZWQoYXJncykge1xuICAgIGNvbnN0IGxhYmVsID0gYXJncy5vYmplY3Q7XG5cbiAgICAvLyA+PiBjb2xvci1yZ2JhXG4gICAgLy8gQ3JlYXRlcyB0aGUgY29sb3Igd2l0aCAxMDAgYWxwaGEsIDI1NSByZWQsIDEwMCBncmVlbiwgMTAwIGJsdWVcbiAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcigxMDAsIDI1NSwgMTAwLCAxMDApO1xuICAgIC8vIDw8IGNvbG9yLXJnYmFcblxuICAgIGxhYmVsLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25MYWJlbDRMb2FkZWQoYXJncykge1xuICAgIGNvbnN0IGxhYmVsID0gYXJncy5vYmplY3Q7XG5cbiAgICAvLyA+PiBjb2xvci1yZ2JhLWZ1bGxcbiAgICAvLyBDcmVhdGVzIHRoZSBjb2xvciB3aXRoIDEwMCBhbHBoYSwgMTAwIHJlZCwgMTAwIGdyZWVuLCAxMDAgYmx1ZVxuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKDB4NjQ2NDY0NjQpO1xuICAgIC8vIDw8IGNvbG9yLXJnYmEtZnVsbFxuXG4gICAgbGFiZWwuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxhYmVsNUxvYWRlZChhcmdzKSB7XG4gICAgY29uc3QgbGFiZWwgPSBhcmdzLm9iamVjdDtcblxuICAgIC8vID4+IGNvbG9yLWNvbG9yLW5hbWVcbiAgICAvLyBDcmVhdGVzIHRoZSBjb2xvciBmcm9tIHRodyBrbm93biBjb2xvcnMgbGlzdFxuICAgIC8vIGltcG9ydCAqIGFzIGtub3duQ29sb3JzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2tub3duLWNvbG9yc1wiO1xuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGtub3duQ29sb3JzLk9yYW5nZVJlZCk7XG4gICAgLy8gPDwgY29sb3ItY29sb3ItbmFtZVxuXG4gICAgbGFiZWwuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG59XG4iXX0=