function order_sandwich(items: string[]){
    console.log("Ordering a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
}

order_sandwich(["ham", "cheese", "lettuce", "tomato"]);
order_sandwich(["turkey", "avocado", "cheese"]);
order_sandwich(["chicken", "bacon", "lettuce", "tomato", "pickles"]);