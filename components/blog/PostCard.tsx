"use client"
import {motion} from 'framer-motion'
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";

import { PostCardProps } from "../Types/postcardTypes";



export default function PostCard({
  title,
  slug,
  excerpt,
  category,
  author,
  date,
  featureImage,
}: PostCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card className='overflow-hidden shadow-md rounded-2xl'>
        <Image
          alt={title}
          className='object-cover w-full h-48'
          height={300}
          src={featureImage}
          width={500}
        />
        <CardBody className='p-4'>
          <p className='text-sm text-blue-500'>{category}</p>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <p className='text-gray-500 dark:text-gray-400 line-clamp-3'>
            {excerpt}
          </p>
          <div className='flex items-center justify-between mt-4 text-sm'>
            <span>{author}</span>
            <span>{date}</span>
          </div>
          <Link
            className='inline-block mt-2 text-blue-600 hover:underline'
            href={`/blog/${slug}`}>
            Read More →
          </Link>
        </CardBody>
      </Card>
    </motion.div>
  );
}