// app/admin/page.tsx
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function Admin() {
  const { data } = await supabase
    .from("loan_applications")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Ziidi Admin</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>County</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(app => (
            <tr key={app.id}>
              <td>{app.full_name}</td>
              <td>{app.phone}</td>
              <td>{app.county}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
