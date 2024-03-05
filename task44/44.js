"use strict";
function order_sandwich(items) {
    console.log("Ordering a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
}
order_sandwich(["grilled-beef patty", "cheese", "lettuce", "cucumber", "tomato", "tahini sauce"]);
order_sandwich(["veggies", "avocado", "cheese", "iceberg", ""]);
order_sandwich(["chicken", "mayonnaise", "lettuce", "tomato", "pickles"]);
