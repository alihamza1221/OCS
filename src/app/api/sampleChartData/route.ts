export function GET() {
  const chartData = [];
  const startDate = new Date("2024-04-01");
  const endDate = new Date("2024-06-30");
  const oneDay = 24 * 60 * 60 * 1000;

  for (
    let date = startDate;
    date <= endDate;
    date = new Date(date.getTime() + oneDay)
  ) {
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      chartData.push({
        date: date.toISOString().split("T")[0],
        productive: Math.floor(Math.random() * 12) + 1,
        nonProductive: Math.floor(Math.random() * 12) + 1, // Random hours between 1 and 12
      });
    }
  }
  console.log(chartData);
  return Response.json({
    data: chartData,
  });
}
