import { NarrativeWriting } from '@mewsings/core';

export class AppService {
  private writings: NarrativeWriting[] = [];

  async getWritings(): Promise<NarrativeWriting[]> {
    return this.writings;
  }
}
