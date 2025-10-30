import Form from "@/src/app/ui/invoices/create-form";
import Breadcrumbs from "@/src/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/src/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a new invoice",
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
