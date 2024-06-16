import { useEffect, useState } from 'react';
import { LanguageService } from '../../services/language.service';

export const useProjectsHeading = () => {
  const [text, setText] = useState<string | undefined>(undefined);
  const ls = new LanguageService();

  useEffect(() => {
    const subscription = ls.sub.subscribe((res: any) => {
      setText(res.projectsHeading);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [ls]);

  return text;
};