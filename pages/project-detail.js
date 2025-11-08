import Image from "next/image";

export default function CertificatesSection() {
  return (
    <div className="rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 h-56 relative">
      <Image
        src="/images/certificates/certificate1.jpg"
        alt="Client Certificate 1"
        fill
        className="object-contain"
      />
    </div>
  );
}
