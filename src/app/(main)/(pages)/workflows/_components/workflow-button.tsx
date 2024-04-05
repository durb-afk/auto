'use client'
import Workflowform from '@/components/forms/workflowform'
import  CustomModal  from '@/components/global/custom-model'
import { Button } from '@/components/ui/button'
import { useBilling } from '@/provider/billing-provider'
import { useModal } from '@/provider/modal-providers'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal()
//   const { credits } = useBilling()

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    )
  }

  return (
    <Button
      size={'icon'}
      {...(true
        ? {
            onClick: handleClick,
          }
        : {
            disabled: true,
          })}
    >
      <Plus />
    </Button>
  )
}

export default WorkflowButton