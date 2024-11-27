import { useAuth } from "../../context/AuthContext";
import { Tabs, Redirect } from "expo-router";

export default function DashboardLayout() {
  const { user } = useAuth();

  if (!user) {
    // Redirect to sign-in if not authenticated
    return <Redirect href="/signin" />;
  }

  return (
    <Tabs>
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="account-settings" options={{ title: "Account Settings" }} />
    </Tabs>
  );
}
