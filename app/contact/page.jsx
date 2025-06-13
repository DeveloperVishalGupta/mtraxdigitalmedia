'use client';
import { Input, Textarea } from '@heroui/input';
import { title } from '../../components/primitives';
import { Select, SelectItem } from '@heroui/select';
import { Button } from '@heroui/button';
import Discribe from '../../components/discribe';
import GetInTouch from '../../components/GetInTouch';

export const prefrences = [
  { key: 'inquiry', label: 'Inquiry' },
  { key: 'request', label: 'Request' },
  { key: 'support for any services', label: 'Support for any services' },
  { key: 'revenue shareing plan', label: 'Revenue shareing plan' },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="grid grid-cols-4 lg:ps-10">
        <GetInTouch />
        <div className="col-span-2">
          <h1 className={title({ size: 'sm' })}>Contact form</h1>
          <div className=" bg-transGray w-full mt-8 flex flex-col gap-4  rounded-lg px-10 py-8">
            <Input
              label="Name"
              type="email"
              variant="faded"
              placeholder="Enter your name"
              isRequired
              isClearable
            />
            <Select
              isRequired
              className=""
              variant="faded"
              label="Select your prefrences"
              placeholder="Select prefrences"
            >
              {prefrences.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
            <Input
              label="Email"
              placeholder="Enter your email"
              variant="faded"
              type="email"
              isRequired
              isClearable
            />
            <Textarea
              isRequired
              isClearable
              variant="faded"
              minRows={4}
              label="Description"
              placeholder="Enter your description"
            />
            <Button color="danger" variant="bordered">
              Send message
            </Button>
          </div>
        </div>
      </div>

      <Discribe />
    </div>
  );
}
