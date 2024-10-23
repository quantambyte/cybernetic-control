import { User } from "../types";

const RenderContent = ({ title, value }: { title: string; value: string }) => (
  <p className="flex items-start gap-3">
    <span className="font-semibold text-gray-800 min-w-28">{title}:</span>{" "}
    {value}
  </p>
);

const UserDetail = ({
  firstName,
  lastName,
  email,
  phone,
  company,
  image,
}: User) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-end gap-3 ">
        <img src={image} className="w-16 h-16 rounded-full" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          {firstName} {lastName}
        </h1>
      </div>
      <div className="space-y-2 text-gray-600">
        <RenderContent title="Email" value={email} />
        <RenderContent title="Phone" value={phone} />
        <RenderContent title="Title" value={company.title} />
        <RenderContent title="Company" value={company.name} />
        <RenderContent title="Department" value={company.department} />
        <RenderContent
          title="Address"
          value={`${company.address.address}, ${company.address.city}, ${company.address.state} ${company.address.postalCode}, ${company.address.country}`}
        />
      </div>
    </div>
  );
};

export default UserDetail;
