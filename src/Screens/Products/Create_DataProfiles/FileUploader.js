import React, { useRef, useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { Text, Group, Button, rem, LoadingOverlay } from '@mantine/core';

import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';
import { useFileUploadStyles } from './Styles/CreateDashStyles';


const FileUploader = () => {
    const { setActive, position, setImage, submitForm, visible } = useOutletContext();

    const navigate = useNavigate();
    setActive(2);

    const { classes, theme } = useFileUploadStyles();
    const openRef = useRef(null);
    
    const back = () => {
        navigate('/products/create/address+input/map+confirmation')
    };

    useEffect(() => {
        const redirectIfPointDataEmpty = () => {
          if (!position) {
            navigate('/products/create/address+input')
          }
        }
        redirectIfPointDataEmpty()
    }, [])

    const createDashImageUpload = (files) => {
      const [file] = files;
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
          console.log(e.target.result);
          setImage(e.target.result);
      };
      fileReader.readAsDataURL(file)
  }

  return (
    <div className='mt-16 w-[100%] h-[75%] '>
      <div className={classes.wrapper}>
        <LoadingOverlay visible={visible} overlayBlur={2} />
        <Dropzone
          openRef={openRef}
          onDrop={(files) => {
            console.log(files);
            createDashImageUpload(files)
          }}
          className={classes.dropzone}
          radius="md"
          accept={[MIME_TYPES.jpeg, MIME_TYPES.png]}
          maxSize={30 * 1024 ** 2}
        >
          <div style={{ pointerEvents: 'none' }}>
            <Group position="center">
              <Dropzone.Accept>
                <IconDownload
                  size={rem(50)}
                  color={theme.colors[theme.primaryColor][6]}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload
                  size={rem(50)}
                  color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                  stroke={1.5}
                />
              </Dropzone.Idle>
            </Group>
  
            <Text ta="center" fw={700} fz="lg" mt="xl">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
              <Dropzone.Idle>Upload a property image</Dropzone.Idle>
            </Text>
            <Text ta="center" fz="sm" mt="xs" c="dimmed">
              Drag&apos;n&apos;drop files here to upload. We can accept only <i>.jpg</i> or <i>.png</i> files that
              are less than 30mb in size.
            </Text>
          </div>
        </Dropzone>
  
        <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
          Select files
        </Button>
        <Button className='' size="md" radius="xl" onClick={() => submitForm()}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default FileUploader