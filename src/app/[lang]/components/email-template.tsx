import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function EmailTemplate({
  email,
  message,
}: {
  email: string;
  message: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Message from: {email}</CardTitle>
        <CardContent>{message}</CardContent>
      </CardHeader>
    </Card>
  );
}
