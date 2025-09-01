import { Card, CardHeader, CardTitle } from "./ui/card";

export function DashboardCard({ title, date }) {
  return (
    <div>
      <Card className="w-45">
        <CardHeader>
          <CardTitle>
            <p className="text-muted-foreground text-sm">{title}</p>
          </CardTitle>
          <div className="flex justify-start items-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {date}
            </h3>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
