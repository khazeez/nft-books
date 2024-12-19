const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiMWJmOWFmYi04OWRiLTQyNzUtYTY4Yi0wZjMzZjRjN2M3OTciLCJlbWFpbCI6ImNha2lydWwyMTEwMDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjQxYThiZDBmZTllMDY4ZmRiMDcxIiwic2NvcGVkS2V5U2VjcmV0IjoiYWU5NTRmYzJjOGEyOTBkYzM3ZDc3ZTY3OWQ3OGQyNzI4ZTcwZDQ5NWRiOGZhNDJlYTMzOTdlNzIxZWZkMDVmMCIsImV4cCI6MTc2NjEyMDg0MX0.2IWQPaXacNCd5lN-4Fh352ZSetZ7Pk3qQsy9eEzgDJ0";


class Pinata {
    async  getFiles() {
        try {
          const url = "https://api.pinata.cloud/v3/files"
      
          const request = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${JWT}`,
            }
          });
          const response = await request.json();
          return response.data.files;
        } catch (error) {
          console.log(error);
        }
      }
    }


export default new Pinata()