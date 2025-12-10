exports.handler = async (event, context) => {
    console.log(`Context: ${JSON.stringify(context)}`);
    
    const delimiter = "___";
    
    const originalToolName = context.clientContext.custom.bedrockAgentCoreToolName;
    const toolName = originalToolName.substring(originalToolName.indexOf(delimiter) + delimiter.length);
    
    console.log(`Event: ${JSON.stringify(event)}, Tool: ${toolName}`);
    
    if (toolName === 'get_weather') {
        return getWeather(event.city);
    } else {
        return { statusCode: 500, body: "Tool specified is not implemented" };
    }
};

function getWeather(city) {
    const weatherData = {
        "New York": { temp: 18, condition: "Partly Cloudy", humidity: 65 },
        "London": { temp: 12, condition: "Rainy", humidity: 80 },
        "Tokyo": { temp: 22, condition: "Sunny", humidity: 55 },
    };
    
    if (city in weatherData) {
        const data = weatherData[city];
        return {
            statusCode: 200,
            body: JSON.stringify({
                city: city,
                temperature: `${data.temp}°C`,
                condition: data.condition,
                humidity: `${data.humidity}%`
            })
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: `Weather data not available for ${city}` })
        };
    }
}
