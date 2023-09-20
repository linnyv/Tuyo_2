import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const ShareAndSaveComponent = ({ formData }) => {
  const handleShare = () => {
    const shareText = 'Check out this form!';
    const shareUrl = window.location.href;
    const emailSubject = 'Check out this form';
    const emailBody = `Hi,\n\nI wanted to share this form with you: ${shareUrl}`;

    if (navigator.share) {
      navigator.share({
        title: 'Share Form',
        text: shareText,
        url: shareUrl
      })
        .then(() => {
          console.log('Form shared successfully.');
        })
        .catch((error) => {
          console.error('Error sharing form:', error);
        });
    } else {
      console.warn('Web Share API not supported.');

      // Provide fallback options for LinkedIn and email
      const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;
      const emailUrl = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Open LinkedIn and email sharing in a new tab/window
      window.open(linkedInUrl, '_blank');
      window.open(emailUrl, '_blank');
    }
  };

  const handleSaveAsPDF = () => {
    const DocumentComponent = () => (
      <Document>
        <Page>
          <Text>Form Data:</Text>
          {formData.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </Page>
      </Document>
    );

    // Render the PDF document
    const pdfBlob = DocumentComponent.render().toBlob();

    // Create a download link for the PDF
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(pdfBlob);
    downloadLink.download = 'form_data.pdf';
    downloadLink.click();
  };

  return (
    <div>
      <button onClick={handleShare}>Share Form</button>
      <button onClick={handleSaveAsPDF}>Save as PDF</button>
    </div>
  );
};

export default ShareAndSaveComponent;