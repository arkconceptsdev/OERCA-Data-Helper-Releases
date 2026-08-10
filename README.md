# OERCA Data Helper

OERCA Data Helper is a browser-based utility designed to reduce repetitive data entry when transferring aquarium records from **Aquarium Manager Pro** into **OERCA**.

The tool takes exported Aquarium Manager Pro data and generates bookmarklets that automatically populate supported OERCA forms.

## Tutorial https://youtu.be/JdlR26yGLhI?si=_z64veZ1DRyit1i2
## Features

OERCA Data Helper currently supports:

* Treatments
* Water Quality
* Maintenance
* Automatic field population
* Multiple entries per tank
* Date handling
* Retry functionality
* Skipping unrecognized entries
* Manual review before submission

## Basic Workflow

1. Export your weekly data from Aquarium Manager Pro using the **OERCA Data Extractor**.
2. Upload the extracted data into **OERCA Data Helper**.
3. Review the imported entries and verify that the data is correct.
4. Drag the generated bookmarklets to your browser's bookmarks bar.
5. Open OERCA.
6. Navigate to the appropriate tank and OERCA section.
7. Click the corresponding bookmarklet.
8. Review the populated information.
9. Confirm the entry in OERCA.

## Treatments

Navigate to the **Treatments** section in OERCA and select the appropriate tank.

Run the **Treatment** bookmarklet.

OERCA Data Helper will populate the applicable fields for the current treatment.

Review and confirm the entry manually. After confirmation, continue to the next treatment and run the tool again as needed.

If an entry cannot be recognized or mapped correctly, skip that entry and continue with the remaining treatments.

## Water Quality

Navigate to the **Water Quality** section and select the appropriate tank.

Run the **Water Quality** bookmarklet.

The tool will populate the relevant water-quality parameters for that tank.

If multiple Water Quality records exist for the same tank, the tool can cycle through the available dates.

Before confirming each entry:

* Verify the date.
* Verify the parameter fields.
* Reset or clear fields if necessary.
* Use the tool's retry function to populate the entry again.

Once the information is correct, confirm the entry and continue to the next date or tank.

## Maintenance

Navigate to the **Maintenance** section and select the appropriate tank.

Run the **Maintenance** bookmarklet.

The tool can automatically:

* Select supported maintenance actions
* Identify actions such as backwashes and water changes
* Populate the description
* Set the appropriate date

Review the populated entry and confirm it in OERCA.

## Important

OERCA Data Helper is intended to assist with data entry, not replace review.

Always verify generated entries before submitting them to OERCA.

## Tutorial

A video tutorial is available demonstrating the complete workflow, including:

* Exporting data from Aquarium Manager Pro
* Uploading data into OERCA Data Helper
* Installing the bookmarklets
* Entering Treatments
* Entering Water Quality records
* Entering Maintenance records
* Retrying or skipping entries when necessary

## Feedback and Support

OERCA Data Helper is actively being improved.

If you encounter an issue, have a question, or have an idea for improving the tool, use the contact information provided with the application.
