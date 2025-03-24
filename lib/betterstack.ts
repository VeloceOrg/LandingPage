export type StatusResponse = {
  status: {
    description: string;
    indicator: 'none' | 'minor' | 'major' | 'critical';
  };
  page: {
    id: string;
    name: string;
    url: string;
    timeZone: string;
    updatedAt: string;
  };
  metrics: {
    uptime: number;
    uptimeDay: number;
    uptimeWeek: number;
    uptimeMonth: number;
    uptimeYear: number;
  };
};

export class BetterStackClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://uptime.betterstack.com/api/v2';
  }

  async getStatus(): Promise<StatusResponse> {
    const response = await fetch(`${this.baseUrl}/status-pages/${process.env.BETTER_STACK_STATUS_PAGE_ID}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Better Stack API error: ${response.statusText}`);
    }

    return response.json();
  }
} 