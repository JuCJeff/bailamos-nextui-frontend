import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";

import useAuth from "../../hooks/authHooks";

import { LoginForms } from "../LoginForm";
import Profile from "./Profile";
import Template from "./Template";

export default function Dashboard() {
  const user = useAuth();

  return (
    <div className="flex-col items-center px-4 max-sm:px-0">
      {user ? (
        <Tabs variant="light" aria-label="Organizer Dashboard Tabs">
          <Tab key="events" title="Events">
            <Card>
              <CardBody className="flex items-center">Content</CardBody>
            </Card>
          </Tab>
          <Tab
            className="flex justify-center"
            key="templates"
            title="Templates"
          >
            <Card className="w-[540px] px-5 max-sm:w-full">
              <CardBody>
                <Template />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="profile" title="Profile">
            <Card>
              <CardBody className="flex items-center">
                <Profile />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      ) : (
        <LoginForms />
      )}
    </div>
  );
}
