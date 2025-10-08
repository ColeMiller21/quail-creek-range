"use client"

import { Cloud, Wind, Droplets, Eye, CloudRain, Sun, CloudSnow } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface WeatherData {
  location: string
  temp: number
  condition: string
  wind: string
  humidity: string
  visibility: string
  forecast: Array<{
    day: string
    high: number
    low: number
    condition: string
  }>
}

function getWeatherIcon(code: number) {
  // WMO Weather interpretation codes
  if (code === 0) return <Sun className="w-16 h-16 text-primary" />
  if (code <= 3) return <Cloud className="w-16 h-16 text-primary" />
  if (code <= 67) return <CloudRain className="w-16 h-16 text-primary" />
  if (code <= 77) return <CloudSnow className="w-16 h-16 text-primary" />
  return <Cloud className="w-16 h-16 text-primary" />
}

function getWeatherCondition(code: number): string {
  const conditions: { [key: number]: string } = {
    0: "Clear",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Foggy",
    51: "Light Drizzle",
    53: "Drizzle",
    55: "Heavy Drizzle",
    61: "Light Rain",
    63: "Rain",
    65: "Heavy Rain",
    71: "Light Snow",
    73: "Snow",
    75: "Heavy Snow",
    77: "Snow Grains",
    80: "Light Showers",
    81: "Showers",
    82: "Heavy Showers",
    85: "Light Snow Showers",
    86: "Snow Showers",
    95: "Thunderstorm",
    96: "Thunderstorm with Hail",
    99: "Thunderstorm with Hail",
  }
  return conditions[code] || "Unknown"
}

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    location: "Northlake, Texas",
    temp: 72,
    condition: "Loading...",
    wind: "-- mph",
    humidity: "--%",
    visibility: "-- miles",
    forecast: [
      { day: "Thu", high: 0, low: 0, condition: "Loading" },
      { day: "Fri", high: 0, low: 0, condition: "Loading" },
      { day: "Sat", high: 0, low: 0, condition: "Loading" },
    ],
  })
  const [currentWeatherCode, setCurrentWeatherCode] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Coordinates for Northlake, Texas
        const lat = 33.1273
        const lon = -97.2614

        // Fetch current weather and forecast
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America/Chicago&forecast_days=4`,
        )

        if (!response.ok) throw new Error("Failed to fetch weather")

        const data = await response.json()

        // Get wind direction from degrees
        const windDirection = getWindDirection(data.current.wind_direction_10m)

        // Get day names for forecast
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        const today = new Date()

        setCurrentWeatherCode(data.current.weather_code)
        setWeatherData({
          location: "Northlake, Texas",
          temp: Math.round(data.current.temperature_2m),
          condition: getWeatherCondition(data.current.weather_code),
          wind: `${Math.round(data.current.wind_speed_10m)} mph ${windDirection}`,
          humidity: `${data.current.relative_humidity_2m}%`,
          visibility: "10 miles", // Open-Meteo doesn't provide visibility in free tier
          forecast: [1, 2, 3].map((offset) => {
            const forecastDate = new Date(today)
            forecastDate.setDate(today.getDate() + offset)
            return {
              day: days[forecastDate.getDay()],
              high: Math.round(data.daily.temperature_2m_max[offset]),
              low: Math.round(data.daily.temperature_2m_min[offset]),
              condition: getWeatherCondition(data.daily.weather_code[offset]),
            }
          }),
        })
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching weather:", error)
        setIsLoading(false)
      }
    }

    fetchWeather()
    // Refresh weather every 10 minutes
    const interval = setInterval(fetchWeather, 600000)
    return () => clearInterval(interval)
  }, [])

  function getWindDirection(degrees: number): string {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
    const index = Math.round(degrees / 45) % 8
    return directions[index]
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4">Current Conditions</h2>
            <p className="text-foreground-muted text-lg">Live weather for Northlake, Texas - Plan your range visit</p>
          </div>

          <Card className="border-border shadow-lg">
            <CardContent className="p-8">
              {/* Current Weather */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-border">
                <div className="text-center md:text-left">
                  <div className="text-foreground-muted mb-2">{weatherData.location}</div>
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    {getWeatherIcon(currentWeatherCode)}
                    <div>
                      <div className="text-6xl font-bold text-foreground">{isLoading ? "--" : weatherData.temp}°F</div>
                      <div className="text-foreground-muted text-lg">{weatherData.condition}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <Wind className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-foreground-muted">Wind</div>
                    <div className="font-semibold text-foreground">{weatherData.wind}</div>
                  </div>
                  <div className="text-center">
                    <Droplets className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-foreground-muted">Humidity</div>
                    <div className="font-semibold text-foreground">{weatherData.humidity}</div>
                  </div>
                  <div className="text-center">
                    <Eye className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-foreground-muted">Visibility</div>
                    <div className="font-semibold text-foreground">{weatherData.visibility}</div>
                  </div>
                </div>
              </div>

              {/* 3-Day Forecast */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-4">3-Day Forecast</h3>
                <div className="grid grid-cols-3 gap-4">
                  {weatherData.forecast.map((day, index) => (
                    <div
                      key={index}
                      className="bg-muted rounded-lg p-4 text-center hover:bg-primary/5 transition-colors"
                    >
                      <div className="font-semibold text-foreground mb-2">{day.day}</div>
                      <div className="text-sm text-foreground-muted mb-2">{day.condition}</div>
                      <div className="flex justify-center gap-2 text-sm">
                        <span className="text-foreground font-semibold">{isLoading ? "--" : day.high}°</span>
                        <span className="text-foreground-light">{isLoading ? "--" : day.low}°</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
