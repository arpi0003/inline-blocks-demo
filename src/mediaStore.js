import path from 'path';

export default class DummyMediaStore {
  accept = '*';

  async persist(files) {
    const uploaded = [];
    console.log('media manager: files: ', files);
    debugger;
    for (const { file, directory } of files) {
      let mediaPath = path.join(directory, file.name);
      if (mediaPath.charAt(0) === '/') {
        mediaPath = mediaPath.slice(1);
      }
      alert(`Media path is ${mediaPath}`);
      // try {
      //   const content = (await base64File(file)).toString().split(',')[1] // only need the data piece
      //   const uploadResponse: GithubUploadResponse =
      //     await this.githubClient.upload(mediaPath, content, 'Upload', true)
      //
      //   uploaded.push(contentToMedia(uploadResponse.content))
      // } catch (e) {
      //   console.warn('Failed to upload content to Github: ' + e)
      // }
    }

    return uploaded
  }
  
  async previewSrc(src) {
    return src;
  }
  async list() {
    const items = [
      {
        id: 'img-left',
        type: 'file',
        filename: 'ivan-bandura-unsplash-square.jpg',
        directory: '/public',
        previewSrc: '/ivan-bandura-unsplash-square.jpg',
      },
      {
        id: 'img-right',
        type: 'file',
        filename: 'martin-sanchez-unsplash-square.jpg',
        directory: '/public',
        previewSrc: '/martin-sanchez-unsplash-square.jpg',
      },
    ];
    return {
      items,
      offset: 0,
      limit: 10,
      totalCount: 0,
    };
  }
  async delete() {
    alert('Cannot delete files without a backend');
  }
}
