"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY!;

const Contact = ({ user }: { user: string }) => {
  const formRef = useRef<HTMLFormElement>(null);

  console.log(user);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current!,
          PUBLIC_KEY
        );

        if (result.text) {
          toast.success(`Thank you for reaching out to us ${result.text}`);
          formRef.current.reset();
        }
      } catch (error) {
        console.log(error);
        toast.error("Message failed to send try again later");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row justify-center items-center  min-h-screen"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="hidden sm:flex w-full"
      >
        <Image src="/contactHero.svg" alt="contact" width={400} height={400} />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full"
      >
        <Card className="sm:w-[400px]">
          <CardHeader>
            <h2 className="text-lg font-bold">Contacts</h2>
          </CardHeader>
          <CardContent>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Input placeholder="Name" type="text" name="name" required />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Input placeholder="Email" type="email" name="email" required />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Textarea placeholder="Message" name="message" required />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-green-600 disabled:cursor-not-allowed hover:bg-green-700 w-full"
                  type="submit"
                  disabled={user === ""}
                >
                  Submit
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
