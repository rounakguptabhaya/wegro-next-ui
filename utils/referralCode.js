import { randomBytes } from 'crypto';
import { query } from '@/src/lib/db';

// Placeholder for your actual database checking function
// This function should return true if the code is unique, false otherwise
// async function isReferralCodeUnique(referralCode) {
//   // Implement database check logic here
//   // For example, using an ORM or direct database client
//   // This should return true if the referral code does not exist (is unique), and false otherwise
//   throw new Error('isReferralCodeUnique function is not implemented');
// }

export async function isReferralCodeUnique(referralCode) {
    try {
      // Execute a raw SQL query to check if the referral code exists
      const results = await query({
        query: 'SELECT * FROM subscribers WHERE referralCode = ?',
        values: [referralCode]
      });
      
      // If the query returns any results, the referral code is not unique
      return results.length === 0;
    } catch (error) {
      console.error('Error checking referral code uniqueness:', error);
      throw error;
    }
  }

export async function generateReferralCode() {
  const length = 6; // Length of the referral code
  const characters = '123456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // Characters to use in the referral code
  let unique = false;
  let referralCode;

  while (!unique) {
    referralCode = '';
    for (let i = 0; i < length; i++) {
      // Generate random index to pick characters
      const randomIndex = randomBytes(1)[0] % characters.length;
      referralCode += characters[randomIndex];
    }

    // Check if generated code is unique
    unique = await isReferralCodeUnique(referralCode);
  }

  return referralCode;
}