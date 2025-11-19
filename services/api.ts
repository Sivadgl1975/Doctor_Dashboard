// Simulation of backend calls
export const api = {
  lab: {
    getHistory: async (patientId: string) => {
      return [
        { id: 1, test: 'Complete Blood Count', date: '2023-10-25', status: 'Completed', result: 'Normal' },
        { id: 2, test: 'Lipid Profile', date: '2023-10-24', status: 'Completed', result: 'High Risk' },
        { id: 3, test: 'HbA1c', date: '2023-09-10', status: 'Completed', result: 'Normal' },
      ];
    },
    getPending: async () => {
      return [
        { id: 4, patient: 'John Doe', test: 'Thyroid Profile', requested: '2023-10-26' },
        { id: 5, patient: 'Sarah Smith', test: 'Liver Function', requested: '2023-10-26' },
      ];
    }
  },
  appointments: {
    getToday: async () => {
      return [
        { id: 1, time: '09:00 AM', patient: 'Alice Brown', type: 'Checkup', status: 'Confirmed' },
        { id: 2, time: '10:30 AM', patient: 'Robert Wilson', type: 'Follow-up', status: 'Pending' },
        { id: 3, time: '11:00 AM', patient: 'Emma Davis', type: 'Consultation', status: 'Confirmed' },
        { id: 4, time: '02:00 PM', patient: 'James Miller', type: 'Checkup', status: 'Cancelled' },
      ];
    }
  },
  ipd: {
    getWards: async () => {
      return Array.from({ length: 12 }).map((_, i) => ({
        bedNumber: `A-${i + 1}`,
        isOccupied: i % 3 === 0, // Mock occupancy
        patientName: i % 3 === 0 ? `Patient ${i + 1}` : null,
        condition: i % 3 === 0 ? (i % 2 === 0 ? 'Stable' : 'Critical') : null
      }));
    }
  },
  analytics: {
    getEarnings: async () => {
      return {
        daily: 1250,
        weekly: 8400,
        monthly: 32000,
        growth: 12.5
      };
    }
  }
};