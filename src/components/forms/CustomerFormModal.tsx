import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";

// Zod Schema for Validation
const customerSchema = z.object({
  customer_code: z.string().min(1, "Customer code is required"),
  customer_name: z.string().min(1, "Customer name is required"),
  customer_type: z.string().optional(),
  contact_person: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  gst_number: z.string().optional(),
  pan_number: z.string().optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  pincode: z.string().optional(),
  billing_address_same: z.boolean(),
  billing_address_line1: z.string().optional(),
  billing_address_line2: z.string().optional(),
  billing_city: z.string().optional(),
  billing_state: z.string().optional(),
  billing_pincode: z.string().optional(),
  credit_limit: z.string().optional(),
  credit_days: z.string().optional(),
  discount_percentage: z.string().optional(),
  is_active: z.boolean(),
});

type CustomerFormValues = z.infer<typeof customerSchema>;

export function CustomerFormModal() {
  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      customer_code: "",
      customer_name: "",
      customer_type: "",
      contact_person: "",
      phone: "",
      email: "",
      gst_number: "",
      pan_number: "",
      address_line1: "",
      address_line2: "",
      city: "",
      state: "",
      pincode: "",
      billing_address_same: false,
      billing_address_line1: "",
      billing_address_line2: "",
      billing_city: "",
      billing_state: "",
      billing_pincode: "",
      credit_limit: "",
      credit_days: "",
      discount_percentage: "",
      is_active: true,
    },
    mode: "onBlur",
  });

  const onSubmit = (values: CustomerFormValues) => {
    console.log("Customer form values:", values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <UserPlus />
          Add Customer
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 overflow-y-auto space-y-8 
            scrollbar-thumb-rounded scrollbar-thumb-gray-400
            [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-thumb]:bg-gray-200
            [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {/* Basic Info */}
            <fieldset className="border p-4 rounded-md">
              <legend className="text-[#23445f] font-semibold">
                Customer Info
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="customer_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer Code</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="customer_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="customer_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Retail">Retail</SelectItem>
                          <SelectItem value="Wholesale">Wholesale</SelectItem>
                          <SelectItem value="Distributor">
                            Distributor
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact_person"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>

            {/* Contact Info */}
            <fieldset className="border p-4 rounded-md">
              <legend className="text-[#23445f] font-semibold">
                Contact Details
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gst_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GST Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pan_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PAN Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>

            {/* Shipping Address */}
            <fieldset className="border p-4 rounded-md">
              <legend className="text-[#23445f] font-semibold">
                Address Details
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="address_line1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address Line 1</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address_line2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address Line 2</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pincode</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>

            {/* Billing Address */}
            <fieldset className="border p-4 rounded-md">
              <legend className="text-[#23445f] font-semibold">
                Billing Address
              </legend>
              <FormField
                control={form.control}
                name="billing_address_same"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Same as shipping address</FormLabel>
                  </FormItem>
                )}
              />
              {!form.watch("billing_address_same") && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <FormField
                    control={form.control}
                    name="billing_address_line1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Billing Address Line 1</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="billing_city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Billing City</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="billing_state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Billing State</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="billing_pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Billing Pincode</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </fieldset>

            {/* Credit Details */}
            <fieldset className="border p-4 rounded-md">
              <legend className="text-[#23445f] font-semibold">
                Credit Details
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="credit_limit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Credit Limit</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="credit_days"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Credit Days</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="discount_percentage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount %</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.01" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>

            {/* Active Checkbox */}
            <FormField
              control={form.control}
              name="is_active"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Active Customer</FormLabel>
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <Button type="submit">Submit</Button>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => form.reset()}>
                  Cancel
                </Button>
              </DialogTrigger>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
