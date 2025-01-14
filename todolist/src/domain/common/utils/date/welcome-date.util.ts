export function WelcomeDate() {
  const datetime = new Date()
  const date = datetime.toISOString().split("T")
  const hour = +date[1].split(".")[0].slice(0, -3).replace(":", "")

    const isMorning = hour >= 500 && hour < 1200
    const isAfternoon = hour >= 1200 && hour < 1800
    const isNight = hour >= 1800 || hour < 500

    switch (true) {
      case isMorning:
        return "Bom dia!"
      case isAfternoon:
        return "Boa tarde!"
      case isNight:
        return "Boa noite!"
    }
}
