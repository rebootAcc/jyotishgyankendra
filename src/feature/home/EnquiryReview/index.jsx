import EnquiryForm from "@/components/contacts/EnquiryForm";

export default function EnquiryReview() {
  return (
    <section className="flex gap-5 lg:gap-10">
      <div className="md:w-[50%] w-full">
        <EnquiryForm />
      </div>
    </section>
  );
}
