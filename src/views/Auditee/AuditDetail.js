import React from 'react'
import { useParams } from 'react-router-dom';

export default function AuditDetail() {
  const { id } = useParams();
  return (
    <div>AuditDetail</div>
  )
}
